// Light/dark switch. The starting theme is set by the small script in <head>;
// this file only handles clicks and remembers the visitor's choice.
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function updateLabel() {
  const isDark = root.getAttribute('data-theme') === 'dark';
  toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

toggle.addEventListener('click', function () {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {
    // Private browsing can block storage; the switch still works for this visit.
  }
  updateLabel();
});

updateLabel();

// Keeps the copyright year current.
document.getElementById('year').textContent = new Date().getFullYear();
