#!/bin/bash

source .vevn/bin/activate

search_path="${1:-.}"

log () {
  # Terminal 標準 log 輸出，加上時間戳
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"
}

find "$search_path" -type f -name '*.html' | while IFS= read -r htmlfile; do
  base="${htmlfile%.html}"
  mdfile="${base}.md"
  if [ -f "$mdfile" ]; then
    log "略過: 已存在 $mdfile"
  else
    log "轉換: $htmlfile -> $mdfile"
    if html-2-markdown "$htmlfile" -o "$mdfile"; then
      log "成功：$mdfile 產生完成"
    else
      log "失敗：$htmlfile 轉換時發生錯誤"
    fi
  fi
done
