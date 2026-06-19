# convertir-cv.ps1
# Convierte el .docx de docs/ a PDF y luego sube a GitHub
#
# Uso: click derecho -> "Run with PowerShell"
#      o desde terminal: .\convertir-cv.ps1

$docsPath   = "$PSScriptRoot\docs"
$outputPath = "$docsPath\CV_BillyArroyo.pdf"

# Busca cualquier .docx en docs/
$docx = Get-ChildItem "$docsPath\*.docx" | Select-Object -First 1

if (-not $docx) {
    Write-Host "ERROR: No se encontro ningun archivo .docx en docs/" -ForegroundColor Red
    Write-Host "Coloca tu CV.docx dentro de la carpeta docs/ e intenta de nuevo."
    pause
    exit 1
}

Write-Host "Convirtiendo: $($docx.Name) -> CV_BillyArroyo.pdf ..." -ForegroundColor Cyan

try {
    $word   = New-Object -ComObject Word.Application
    $word.Visible = $false
    $doc    = $word.Documents.Open($docx.FullName)
    $doc.SaveAs([ref]$outputPath, [ref]17)  # 17 = wdFormatPDF
    $doc.Close()
    $word.Quit()
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null

    Write-Host "PDF generado correctamente: $outputPath" -ForegroundColor Green
} catch {
    Write-Host "ERROR al convertir: $_" -ForegroundColor Red
    pause
    exit 1
}

# Sube a GitHub automaticamente
Write-Host ""
Write-Host "Subiendo a GitHub..." -ForegroundColor Cyan

Set-Location $PSScriptRoot
git add docs/CV_BillyArroyo.pdf
git commit -m "Actualiza CV en PDF"
git push

Write-Host ""
Write-Host "Listo! Tu CV actualizado ya esta en GitHub Pages." -ForegroundColor Green
pause
