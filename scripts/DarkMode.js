const toggleBtn = document.getElementById('darkToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Mentés localStorage-be
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});

// Betöltésnél automatikus visszaállítás
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
