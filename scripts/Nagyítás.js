const icons = document.querySelectorAll('.icon');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        // Az ikon előtti idézet lekérése
        const quote = event.target.closest('li').textContent.replace('Idézet: ', '').trim();
        popup.textContent = quote; // Idézet megjelenítése
        popup.style.display = 'block';
        overlay.style.display = 'block';
        setTimeout(() => {
            popup.style.top = '50%';
        }, 100);
    });
});

const hidePopup = () => {
    popup.style.top = '-50%'; // Kicsúszás animáció
    setTimeout(() => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        popup.style.top = '0%'; // Visszaállítás
    }, 1000); // 3 másodperces animáció időzítés
};

overlay.addEventListener('click', hidePopup);
