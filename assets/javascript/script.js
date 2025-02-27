// Toggle Night Mode
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  const isNightMode = body.classList.contains('night-mode');
  modeToggle.textContent = isNightMode ? '☀️ Day Mode' : '🌙 Night Mode';
});