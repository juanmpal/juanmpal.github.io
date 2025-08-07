function getSavedTheme() {
  return localStorage.getItem('theme');
}

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

function applyTheme(theme) {
  document.body.classList.remove('light', 'dark');
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.add('light');
  }
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function toggleTheme() {
  const btn = document.getElementById('theme-toggle');
  const isDark = document.body.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  applyTheme(newTheme);
  saveTheme(newTheme);

  // Animate icon
  btn.classList.add('animated');
  setTimeout(() => {
    btn.classList.remove('animated');
  }, 500);
}

function initTheme() {
  const saved = getSavedTheme();
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
  } else {
    applyTheme(getSystemTheme());
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!getSavedTheme()) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }
  initTheme();
});
