$ErrorActionPreference = "Continue"

$images = @{
  "af1-white"        = "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
  "dunk-panda"       = "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
  "jordan4-military" = "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
  "jean-dechire"     = "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80"
  "jean-carpenter"   = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  "varsity-jacket"   = "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
  "zip-hoodie"       = "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80"
  "tech-tracksuit"   = "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80"
  "snapback-cap"     = "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80"
}

$targetDir = "c:\Censure\site vitrine pour projet de soutenance\images\products"

foreach ($key in $images.Keys) {
  $file = Join-Path $targetDir ($key + ".jpg")
  try {
    Invoke-WebRequest -Uri $images[$key] -OutFile $file -TimeoutSec 15
    $len = (Get-Item $file).Length
    Write-Host "[OK] $key -> $len bytes"
  } catch {
    Write-Host "[FAIL] $key : $_"
  }
}
