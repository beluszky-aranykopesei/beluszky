import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { showPopup } from './Nagyitas.js';
import { copyToClipboard } from './Masolas.js';
import { getDailyQuote } from './NapiAranykopes.js';

const supabaseUrl = 'https://wqerrkvnnwdyphnbvjrn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxZXJya3ZubndkeXBobmJ2anJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTI5NTgsImV4cCI6MjA2MDk4ODk1OH0.rSQfUSGCzbn4bySlnCaAjFDhgTsFys8y_fA57ntZ1DI'; // public kulcs a Supabase Settingsben

const supabase = createClient(supabaseUrl, supabaseKey);

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

    window.quotesData = data; // már lekért Supabase adatok

    const container = document.getElementById('aranykopesek');
    container.innerHTML = '';

    data.forEach(row => {
      const li = document.createElement('li');

      const now = new Date();
const oneMonthAgo = new Date();
oneMonthAgo.setMonth(now.getMonth() - 1);

data.forEach((quote) => {
  const quoteDate = new Date(quote.created_at); // vagy a megfelelő dátummező

  const li = document.createElement('li');
  li.classList.add('quote-container');

  const span = document.createElement('span');
  span.textContent = quote.text;

  // Ha az idézet 1 hónapnál fiatalabb
  if (quoteDate > oneMonthAgo) {
    span.classList.add('uj_szoveg');

    const ujIcon = document.createElement('img');
    ujIcon.src = 'Új.png';
    ujIcon.alt = 'Új';
    ujIcon.classList.add('uj'); // már definiált CSS osztály
    span.appendChild(ujIcon);
  }

  li.appendChild(span);
  // ...további ikonok (másolás, nagyítás stb.)
  quoteList.appendChild(li);
});

      // Szöveg
      const textNode = document.createTextNode(row.Content);
      li.appendChild(textNode);

      // Másolás ikon
      const copyIcon = document.createElement('img');
      copyIcon.src = 'Másolás.png';
      copyIcon.alt = 'Másolás ikon';
      copyIcon.className = 'copy-icon';
      copyIcon.title = 'Másolás vágólapra';
      copyIcon.onclick = function () {
        copyToClipboard(this);
      };

      // Szem ikon (nagyítás – pl. alert, később modal)
      const zoomIcon = document.createElement('img');
      zoomIcon.src = 'Szem.png';
      zoomIcon.alt = 'Szem ikon';
      zoomIcon.className = 'zoom-icon'; // elnevezheted másként is
      zoomIcon.title = 'Nagyítás';
      zoomIcon.onclick = function () {
        showPopup(row.Content);
      };

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

document.addEventListener('DOMContentLoaded', () => {
  const quote = getDailyQuote(window.quotesData);
  const quoteElement = document.getElementById('daily-quote');
  if (quoteElement) {
    quoteElement.innerText = quote;
  }
});



