const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

export function showPopup(text) {
  popup.textContent = text;
  popup.style.display = 'block';
  overlay.style.display = 'block';
  setTimeout(() => {
    popup.style.top = '50%';
  }, 100);
}

export function hidePopup() {
  popup.style.top = '-50%';
  setTimeout(() => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    popup.style.top = '0%';
  }, 1000);
}

overlay.addEventListener('click', hidePopup);
