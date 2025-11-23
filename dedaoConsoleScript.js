function s() {
  const qs = (sel) => document.querySelector(sel);
  const outer = (el) => (el ? el.outerHTML : '');

  // 依題意指定的元素
  const elCover = qs('div.article-cover-wrap');
  const elTitle = qs('div.article-title.iget-common-c1');
  const elInfo  = qs('div.article-info');
  const elBody  = qs('div.article-body');
  const elTime  = qs('div.article-time-info.iget-common-c3.iget-common-f4');

  // 組合輸出內容
  const parts = [
    outer(elCover),
    outer(elTitle),
    outer(elInfo),
    outer(elBody),
    outer(elTime),
  ];

  // 清理檔名文字
  const sanitize = (s) =>
    s
      .replace(/[\\/:*?"<>|]+/g, '')
      .replace(/\s+/g, ' ')
      .replace(/[\r\n]+/g, ' ')
      .trim()
      .slice(0, 120);

  // 標題與時間
  const titleText = (elTitle?.innerText || document.title || 'page').trim();
  const rawTimeText = elTime?.innerText || new Date().toISOString().slice(0, 10);
  const timeText = rawTimeText.replace(/\s*首次发布:\s*/, '').trim();
  const filename = `${sanitize(titleText)}-${sanitize(timeText)}.html`;

  // 組合 HTML
  const content = `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${titleText}</title>
</head>
<body>
${parts.join('\n\n')}
</body>
</html>`;

  // 下載檔案
  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 0);

  console.log(`✅ 已儲存：${filename}`);
};


function n() {
  const modules = document.querySelectorAll('div.button-module');

  if (modules.length === 0) {
    console.warn('❌ 找不到任何 <div class="button-module"> 元素');
    return;
  }

  let found = false;

  for (const [index, module] of modules.entries()) {
    // 找出模組內的按鈕與文字
    const button = module.querySelector('button.button.iget-common-b4');
    const textSpan = module.querySelector('span.font');

    const text = textSpan?.innerText?.trim() || '';

    // 僅處理內文包含「下一篇」的模組
    if (text.includes('下一篇')) {
      found = true;
      console.log(`🔍 找到第 ${index + 1} 個「下一篇」模組`);

      if (!button) {
        console.warn('⚠️  找到模組但內部沒有按鈕元素。');
        continue;
      }

      // 檢查是否 disabled 或 noMore
      const isDisabled =
        button.disabled ||
        button.classList.contains('noMore') ||
        button.getAttribute('aria-disabled') === 'true';

      if (isDisabled) {
        console.log('⚠️  按鈕目前為無效狀態（disabled 或 noMore）。');
      } else {
        console.log('✅ 按鈕可用，準備模擬點擊事件。');

        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        button.dispatchEvent(clickEvent);

        console.log('🖱️ 已模擬點擊該「下一篇」按鈕。');
      }
    }
  }

  if (!found) {
    console.warn('❌ 沒有找到任何文字包含「下一篇」的 button-module。');
  }
};

function p() {
  const modules = document.querySelectorAll('div.button-module');

  if (modules.length === 0) {
    console.warn('❌ 找不到任何 <div class="button-module"> 元素');
    return;
  }

  let found = false;

  for (const [index, module] of modules.entries()) {
    // 找出模組內的按鈕與文字
    const button = module.querySelector('button.button.iget-common-b4');
    const textSpan = module.querySelector('span.font');

    const text = textSpan?.innerText?.trim() || '';

    // 僅處理內文包含「上一篇」的模組
    if (text.includes('上一篇')) {
      found = true;
      console.log(`🔍 找到第 ${index + 1} 個「上一篇」模組`);

      if (!button) {
        console.warn('⚠️ 找到模組但內部沒有按鈕元素。');
        continue;
      }

      // 檢查是否 disabled 或 noMore
      const isDisabled =
        button.disabled ||
        button.classList.contains('noMore') ||
        button.getAttribute('aria-disabled') === 'true';

      if (isDisabled) {
        console.log('⚠️ 按鈕目前為無效狀態（disabled 或 noMore）。');
      } else {
        console.log('✅ 按鈕可用，準備模擬點擊事件。');

        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        button.dispatchEvent(clickEvent);

        console.log('🖱️ 已模擬點擊該「上一篇」按鈕。');
      }
    }
  }

  if (!found) {
    console.warn('❌ 沒有找到任何文字包含「上一篇」的 button-module。');
  }
};

function findScrollableElement() {
  const all = document.querySelectorAll('*');
  for (const el of all) {
    const style = getComputedStyle(el);
    const canScrollY =
      (style.overflowY === 'auto' || style.overflowY === 'scroll') &&
      el.scrollHeight > el.clientHeight;

    if (canScrollY) {
      console.log('找到可捲動元素：', el);
      return el;
    }
  }
  console.log('沒找到內層可捲動元素，改用 window');
  return window;
}

function d() {
  console.log('scrow down ...');

  const target = findScrollableElement;

  const height =
    target === window
      ? window.innerHeight
      : target.clientHeight;

  if (target === window) {
    window.scrollBy({
      top: height,
      left: 0,
      behavior: 'smooth',
    });
  } else {
    target.scrollBy({
      top: height,
      left: 0,
      behavior: 'smooth',
    });
  }
}


// 隨機等待 4 / 5 / 6 秒
function sleepRandom456() {
  const choices = [4, 5, 6];
  const sec = choices[Math.floor(Math.random() * choices.length)];
  console.log(`等待 ${sec} 秒後再執行 s() ...`);
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

// 依題意：for i = 1 to 20
//   p();
//   random(4,5,6) 秒
//   s();
async function b(times = 20) {
  for (let i = 1; i <= times; i++) {
    console.log(`第 ${i} 次：呼叫 p()`);
    n();
    await sleepRandom456();
    console.log(`第 ${i} 次：呼叫 s()`);
    s();
  }
  console.log('b() 執行完畢');
}

