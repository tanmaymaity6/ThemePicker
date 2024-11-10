const DEFAULT_THEME = 'green';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-selected-theme', theme);
  updateButtonState(theme);
}

function updateButtonState(selectedTheme) {
  document.querySelectorAll('.theme-button').forEach(button => {
    const isSelected = button.getAttribute('data-theme') === selectedTheme;
    button.setAttribute('aria-pressed', isSelected);
  });
}

function saveTheme(theme) {
  localStorage.setItem('preferred-theme', theme);
}

function loadInitialTheme() {
  const savedTheme = localStorage.getItem('preferred-theme') || DEFAULT_THEME;
  applyTheme(savedTheme);
}

function setupEventListeners() {
  document.querySelector('.theme-options').addEventListener('click', event => {
    const theme = event.target.getAttribute('data-theme');
    if (theme) {
      applyTheme(theme);
      saveTheme(theme);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadInitialTheme();
  setupEventListeners();
});
