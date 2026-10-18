
$ErrorActionPreference = "Stop"

npm run build
if ($LASTEXITCODE -ne 0) { throw "Vite build failed." }

$server = Start-Process -FilePath "npm.cmd" `
  -ArgumentList "run", "preview", "--", "--host", "127.0.0.1", "--port", "4173", "--strictPort" `
  -PassThru -WindowStyle Hidden

try {
  $ready = $false

  for ($i = 0; $i -lt 30; $i++) {
    try {
      $response = Invoke-WebRequest "http://127.0.0.1:4173/" -TimeoutSec 2
      if ($response.StatusCode -eq 200) {
        $ready = $true
        break
      }
    } catch {}

    Start-Sleep -Seconds 1
  }

  if (-not $ready) { throw "Vite preview server did not start." }

  node .\scripts\prerender.js
  if ($LASTEXITCODE -ne 0) { throw "Prerendering failed." }
}
finally {
  Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue
}
