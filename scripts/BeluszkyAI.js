function showBeluszkyMenu(quote) {
    // Előző menü eltávolítása, ha van
    const existingMenu = document.getElementById('beluszky-menu');
    if (existingMenu) existingMenu.remove();

    const menu = document.createElement('div');
    menu.id = 'beluszky-menu';
    menu.className = 'beluszky-menu';

    const options = [
        { text: 'Olvasd fel!', action: () => speakQuote(quote) },
        { text: 'Gondold újra!', action: () => rethinkQuote(quote) },
        { text: 'Magyarázd el!', action: () => explainQuote(quote) },
        { text: 'Nyisd meg a BeluszkyAI-t!', action: () => openBeluszkyAI(quote) }
    ];

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt.text;
        btn.onclick = () => {
            opt.action();
            menu.remove();
        };
        menu.appendChild(btn);
    });

    document.body.appendChild(menu);
}

function openOldVersion() {
    window.open('https://beluszky-aranykopesei-stabil.vercel.app/', '_blank');
};
