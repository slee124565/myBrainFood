import sys
import os
from bs4 import BeautifulSoup, NavigableString, Tag


def process_node(node):
    """
    遞歸處理 HTML 節點，保留粗體與特定顏色格式。
    """
    if isinstance(node, NavigableString):
        # 取得文字並移除多餘的換行，但保留文字間的空格
        text = str(node).replace('\n', '')
        return text

    if isinstance(node, Tag):
        content = ""
        for child in node.children:
            content += process_node(child)

        # 略過空內容，但要小心不要把圖片或換行符過濾掉
        if not content and node.name not in ['img', 'br']:
            return ""

        # 1. 處理粗體
        if node.name in ['b', 'strong']:
            return f" **{content}** "

        # 2. 處理顏色 (針對得到的橘紅色重點)
        # 檢查 style 屬性 或 font 標籤
        style = node.get('style', '')
        is_colored = False
        target_color = "#ff6b00"  # 預設轉換後的顏色 (橘紅)

        # 檢查 rgb(255, 107, 0) 或其他紅色系
        if 'color' in style and ('rgb(255, 107, 0)' in style or 'rgb(255,107,0)' in style):
            is_colored = True
        elif node.name == 'font' and node.get('color'):
            is_colored = True
            # 如果 font 標籤原本就有顏色 hex，可以用原本的，這裡統一用重點色

        if is_colored:
            # 使用 span 包裹以在 Markdown 中顯示顏色
            return f'<span style="color: {target_color}; font-weight: bold;">{content}</span>'

        return content
    return ""


def convert_iget_html_to_markdown(file_path):
    if not os.path.exists(file_path):
        print(f"錯誤: 找不到檔案 '{file_path}'")
        sys.exit(1)

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
    except Exception as e:
        print(f"讀取檔案錯誤: {e}")
        sys.exit(1)

    soup = BeautifulSoup(html_content, 'html.parser')
    md_lines = []

    # --- 1. 標題與基本資訊 ---
    title_div = soup.find('div', class_='article-title')
    if title_div:
        md_lines.append(f"# {title_div.get_text(strip=True)}\n")

    # 作者與時間
    info_div = soup.find('div', class_='article-info')
    if info_div:
        author = info_div.find('span', class_='course-title')
        time_info = info_div.find('span', class_='article-publish-time')
        infos = []
        if author: infos.append(f" **出處** : {author.get_text(strip=True)}")
        if time_info: infos.append(f" **時間** : {time_info.get_text(strip=True)}")
        if infos:
            md_lines.append(f"> {' | '.join(infos)}\n")

    # 封面圖
    cover_div = soup.find('div', class_='article-cover-wrap')
    if cover_div:
        img = cover_div.find('img')
        if img and img.get('src'):
            md_lines.append(f"![封面圖]({img['src']})\n")

    # --- 2. 正文解析 ---
    # 得到 App 的結構通常在 .article-body -> .editor-show
    body_container = soup.find('div', class_='article-body')
    editor = body_container.find('div', class_='editor-show') if body_container else None

    if editor:
        for child in editor.children:
            if not isinstance(child, Tag):
                continue

            # 排除雜訊
            if child.name in ['script', 'style']:
                continue
            if 'em-menu' in child.get('class', []):  # 排除選單彈窗
                continue

            # A. 音頻佔位符
            if 'dd-audio' in child.get('class', []) or child.find(class_='dd-audio'):
                audio_title = child.find(class_='audio-title')
                title_txt = audio_title.get_text(strip=True) if audio_title else "音頻"
                md_lines.append(f"> 🎧  **{title_txt}** (請回原網頁收聽)\n")
                continue

            # B. 小標題 (H2)
            if child.name == 'h2':
                md_lines.append(f"\n## {child.get_text(strip=True)}\n")
                continue

            # C. 段落 (P)
            if child.name == 'p':
                # 使用遞歸函數處理內部的粗體與顏色
                p_text = process_node(child)
                if p_text.strip():
                    md_lines.append(f"{p_text}\n")
                continue

            # D. 圖片 (Figure / Img)
            if child.name == 'figure' or (child.name == 'img' and 'big-image' in child.get('class', [])):
                img_tag = child.find('img') if child.name == 'figure' else child
                if img_tag and img_tag.get('src'):
                    md_lines.append(f"\n![插圖]({img_tag['src']})\n")
                continue

            # E. 劃重點 (Elite Module)
            if 'elite-module' in child.get('class', []):
                md_lines.append("\n---\n### 📝 劃重點\n")
                content_div = child.find('div', class_='content')
                if content_div:
                    # 先把 <br> 換成換行符號
                    for br in content_div.find_all('br'):
                        br.replace_with('\n')

                    # 獲取純文字並按行分割
                    raw_text = content_div.get_text()
                    lines = [line.strip() for line in raw_text.split('\n') if line.strip()]

                    for line in lines:
                        # 處理列表項目
                        md_lines.append(f"- {line}")
                md_lines.append("\n---\n")

    # --- 3. 輸出檔案 ---
    output_filename = os.path.splitext(file_path)[0] + ".md"

    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write("\n".join(md_lines))
        print(f"✅ 轉換成功！\n輸入: {file_path}\n輸出: {output_filename}")
    except Exception as e:
        print(f"寫入檔案失敗: {e}")


if __name__ == "__main__":
    # 檢查是否有傳入參數
    if len(sys.argv) < 2:
        print("用法: python html2md.py <html檔案路徑>")
        print("範例: python html2md.py \"19 吸引子.html\"")
    else:
        input_file = sys.argv[1]
        convert_iget_html_to_markdown(input_file)