function copyToClipboard(element) {
    const fullText = element.parentElement.innerText.trim();
    const trimmedText = fullText.slice(0, -3); // utolsó 3 karakter eltávolítása
    const additionalText = " - Beluszky";
    const finalText = trimmedText + additionalText;

    navigator.clipboard.writeText(finalText).then(() => {
        alert('Szöveg kimásolva: ' + finalText);
    }).catch(err => {
        console.error('Hiba történt a másolás során: ', err);
    });
}
