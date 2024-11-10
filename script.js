// Set a default theme and handle theme application
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

// Event listener to handle theme change and save selection
function setupEventListeners() {
  document.querySelector('.theme-options').addEventListener('click', event => {
    const theme = event.target.getAttribute('data-theme');
    if (theme) {
      applyTheme(theme);
      saveTheme(theme);
    }
  });
}

// Initialize theme and event listeners on page load
document.addEventListener('DOMContentLoaded', () => {
  loadInitialTheme();
  setupEventListeners();
});
