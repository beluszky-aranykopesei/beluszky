function copyToClipboard(element) {
    const text = element.parentElement.innerText;
    const additionalText = "- Beluszky";
    const fullText = text + additionalText;
    navigator.clipboard.writeText(fullText).then(() => {
        alert('Szöveg kimásolva: ' + fullText);
    }).catch(err => {
        console.error('Hiba történt a másolás során: ', err);
    });
}
