supabase
  .from('quotes')
  .select('*')
  .order('Date', { ascending: false })
  .order('id', { ascending: true })
  .then(({ data, error }) => {
    if (error) {
      console.error('Supabase hiba:', error.message);
      return;
    }

    const container = document.getElementById('aranykopesek');
    container.innerHTML = '';

    data.forEach(row => {
      const li = document.createElement('li');

      // Szöveg
      const textNode = document.createTextNode(row.Content);
      li.appendChild(textNode);

      // Másolás ikon
      const copyIcon = document.createElement('img');
      copyIcon.src = 'Másolás.png';
      copyIcon.alt = 'Másolás ikon';
      copyIcon.className = 'copy-icon';
      copyIcon.title = 'Másolás vágólapra';
      copyIcon.onclick = 'copyToClipboard(this)';

      // Szem ikon (nagyítás – pl. alert, később modal)
      const zoomIcon = document.createElement('img');
      zoomIcon.src = 'Szem.png';
      zoomIcon.alt = 'Szem ikon';
      zoomIcon.class = 'icon';
      zoomIcon.title = 'Nagyítás';

      // BeluszkyAI ikon – link vagy funkció
      const aiIcon = document.createElement('img');
      aiIcon.src = 'BeluszkyAI.png';
      aiIcon.alt = 'BeluszkyAI';
      aiIcon.className = 'Beluszky-icon';
      aiIcon.title = 'Beszélj BeluszkyAI-jal';
      aiIcon.onclick = () => openBeluszkyAI(row.Content);

      // Ikonok beszúrása
      li.append(copyIcon, zoomIcon, aiIcon);
      container.appendChild(li);
    });
  });
