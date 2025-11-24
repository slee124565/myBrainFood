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

echo "正在處理資料夾: $(pwd)"

# 遍歷所有 .html 檔案
for file in *.html; do
  # 如果沒有找到任何 .html 檔案，*.html 會被當作字串本身，所以需要檢查檔案是否存在
  [ -e "$file" ] || { echo "在 '$DIR' 中找不到 .html 檔案。"; break; }

  # 1. 從檔案名稱中提取年份
  # 取得最後一個 '-' 後面的部分 (例如: "2019年1月21日 1203.html")
  tmp=${file##*-}
  # 取得 '年' 前面的部分 (例如: "2019")
  year=${tmp%%年*}

  # 2. 驗證提取的年份是否為四位數字
  if ! [[ "$year" =~ ^[0-9]{4}$ ]]; then
    echo "跳過 '$file': 在檔名中找不到 '-YYYY年' 格式的有效年份。"
    continue
  fi

  # 3. 檢查檔案名稱是否已經以正確的年份開頭
  if [[ "$file" =~ ^${year}- ]]; then
    echo "跳過 '$file': 檔案名稱已包含正確的年份前綴。"
    continue
  else
    # 修正檔案名稱
    new_name="${year}-${file}"
    echo "重命名: '$file' -> '$new_name'"
    mv "$file" "$new_name"
  fi
done

echo "處理完成。"
