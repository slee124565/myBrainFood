#!/bin/bash

for file in *.html; do
  if [ -f "$file" ]; then
    # Extract content from <div class="article-body">
    content=$(sed -n '/<div class="article-body">/,/</div>/p' "$file")

    # Manual HTML to Markdown conversion
    content=$(echo "$content" | sed '1d;$d')
    content=$(echo "$content" | sed -e 's/<p[^>]*>/\n/g' -e 's/<\/p>/\n/g')
    content=$(echo "$content" | sed 's/<br>/\n/g')
    content=$(echo "$content" | sed 's/<[^>]*>//g')
    content=$(echo "$content" | sed -e 's/&lt;/</g' -e 's/&gt;/>/g' -e 's/&amp;/&/g' -e 's/&quot;/"/g' -e "s/&apos;/'/g")
    content=$(echo "$content" | sed -e 's/^[ \t]*//' -e 's/[ \t]*$//')
    content=$(echo "$content" | sed '/^$/N;/\n$/D')


    base_name="${file%.html}"
    echo -e "$content" > "${base_name}.md"

    echo "Converted ${file} to ${base_name}.md"
  fi
done
