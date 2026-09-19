const initStatusBar = () => {
  const cursorEl = document.getElementById('nvim-cursor');
  const percentEl = document.getElementById('nvim-percent');

  if (!cursorEl || !percentEl) return;

  const updateScrollStatus = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const totalLines = Math.max(
      10,
      Math.floor(document.documentElement.scrollHeight / 24),
    );

    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

    const currentLine = Math.max(
      1,
      Math.min(totalLines, Math.round(scrollPercent * totalLines)),
    );

    const col = cursorEl.getAttribute('data-col') || '0';

    cursorEl.setAttribute('data-line', currentLine.toString());
    cursorEl.textContent = `${currentLine}:${col}`;

    if (scrollTop === 0) {
      percentEl.textContent = 'Top';
    } else if (
      Math.ceil(scrollTop + window.innerHeight) >=
      document.documentElement.scrollHeight
    ) {
      percentEl.textContent = 'Bot';
    } else {
      percentEl.textContent = `${Math.round(scrollPercent * 100)}%`;
    }
  };

  window.addEventListener('mousemove', (e) => {
    const col = Math.max(
      1,
      Math.min(Math.round((e.clientX / window.innerWidth) * 80), 80),
    );
    cursorEl.setAttribute('data-col', col.toString());

    const currentLine = cursorEl.getAttribute('data-line') || '1';
    cursorEl.textContent = `${currentLine}:${col}`;
  });

  window.addEventListener('scroll', updateScrollStatus, { passive: true });
  window.addEventListener('resize', updateScrollStatus, { passive: true });

  updateScrollStatus();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStatusBar);
} else {
  initStatusBar();
}
