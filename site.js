'use strict';
document.querySelectorAll('.video-disclosure').forEach(detail => {
  detail.addEventListener('toggle', () => {
    const frame = detail.querySelector('iframe');
    if (detail.open && !frame.src) frame.src = frame.dataset.src;
    if (!detail.open) frame.removeAttribute('src');
  });
});
const search = document.querySelector('#search');
if (search) {
  document.querySelector('.filterbar').hidden = false;
  const first = document.querySelector('#first-only');
  const papers = [...document.querySelectorAll('.pub')];
  const update = () => {
    const words = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const paper of papers) {
      const match = words.every(w => paper.textContent.toLocaleLowerCase().includes(w)) && (!first.checked || paper.dataset.first === 'true');
      paper.hidden = !match;
      if (match) count++;
    }
    document.querySelectorAll('.pubgroup').forEach(group => { group.hidden = ![...group.querySelectorAll('.pub')].some(p => !p.hidden); });
    document.querySelector('#empty').hidden = count !== 0;
    document.querySelector('#result-count').textContent = document.documentElement.lang === 'ja' ? `${count} 件` : `${count} papers`;
  };
  search.addEventListener('input', update);
  first.addEventListener('change', update);
  update();
}
