#!/bin/bash

# 檢查是否提供了資料夾路徑參數
if [ -z "$1" ]; then
  echo "錯誤：請提供資料夾路徑作為第一個參數。"
  echo "用法: $0 <folder_path>"
  exit 1
fi

DIR="$1"

# 檢查提供的路徑是否為一個有效的資料夾
if [ ! -d "$DIR" ]; then
  echo "錯誤：找不到目錄 '$DIR'"
  exit 1
fi

# 進入目標資料夾，如果失敗則退出
cd "$DIR" || exit

echo "正在處理資料夾: $DIR"

# 遍歷所有 .html 檔案
for file in *.html; do
  # 處理沒有 html 檔案的情況
  [ -e "$file" ] || continue

  # 如果檔案名稱不是以 "2019-" 開頭，則進行重命名
  if [[ ! "$file" =~ ^2019- ]]; then
    echo "重命名: '$file' -> '2019-$file'"
    mv "$file" "2019-$file"
  else
    echo "跳過: '$file' (已重命名)"
  fi
done

echo "處理完成。"
