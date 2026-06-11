'use strict';

require('dotenv').config();

const express    = require('express');
const helmet     = require('helmet');
const cors       = require('cors');
const rateLimit  = require('express-rate-limit');
const pino       = require('pino');
const contactRouter = require('./routes/contact');

const log = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  ...(process.env.NODE_ENV !== 'production' && {
    transport: { target: 'pino-pretty', options: { colorize: true } },
  }),
});

const app  = express();
const PORT = process.env.PORT ?? 3001;

// ── Security headers ──────────────────────────────────────────────
app.use(helmet());

// ── CORS — explicit origins only in production ────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? 'http://localhost:3000').split(',');
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error(`CORS: origin ${origin} not allowed`));
  },
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true,
}));

// ── Body parser ───────────────────────────────────────────────────
app.use(express.json({ limit: '16kb' }));

// ── Global rate limit ─────────────────────────────────────────────
app.use('/api', rateLimit({
  windowMs: 60 * 1000,   // 1 minute
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas solicitudes, intenta más tarde.' },
}));

// ── Request logging ───────────────────────────────────────────────
app.use((req, _res, next) => {
  log.info({ method: req.method, url: req.url });
  next();
});

// ── Routes ────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/contact', contactRouter);

// 404
app.use((_req, res) => res.status(404).json({ error: 'Recurso no encontrado.' }));

// ── Global error handler ──────────────────────────────────────────
app.use((err, req, res, _next) => {
  log.error({ err, url: req.url, method: req.method });
  const status = err.statusCode ?? 500;
  res.status(status).json({
    error: status < 500 ? err.message : 'Error interno del servidor.',
  });
});

// ── Graceful shutdown ─────────────────────────────────────────────
const server = app.listen(PORT, () => {
  log.info(`API running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  log.info('SIGTERM received — shutting down gracefully');
  server.close(() => {
    log.info('Server closed');
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10_000);
});

module.exports = app;
