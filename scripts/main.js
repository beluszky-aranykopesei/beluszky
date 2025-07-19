fetch('/api/aranykopesek')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('aranykopesek');
    data.forEach(kopes => {
      const p = document.createElement('p');
      p.textContent = kopes.szoveg;
      container.appendChild(p);
    });
  });

function openOldVersion() {
    window.open('https://beluszky-aranykopesei-stabil.vercel.app/', '_blank');
};
