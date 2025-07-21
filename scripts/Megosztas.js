export function showShareIcon(liElement, textToShare) {
    // Ellenőrizzük, van-e már megosztás ikon
    if (liElement.querySelector('.share-icon')) return;

    const shareIcon = document.createElement('img');
    shareIcon.src = 'Megosztas.png';
    shareIcon.alt = 'Megosztás ikon';
    shareIcon.title = 'Megosztás';
    shareIcon.className = 'share-icon';
    shareIcon.style.width = '26px';
    shareIcon.style.height = '26px';
    shareIcon.style.marginLeft = '8px';
    shareIcon.style.cursor = 'pointer';

    shareIcon.onclick = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Beluszky Aranyköpés',
                text: textToShare,
                url: location.href
            });
        } else {
            alert('Megosztás nem támogatott ezen az eszközön.');
        }
    };

    liElement.appendChild(shareIcon);
}
