import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { showPopup } from './Nagyitas.js';
import { copyToClipboard } from './Masolas.js';

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

    
    const quoteList = document.getElementById('aranykopesek');
    quoteList.innerHTML = '';

    const now = new Date();
const oneMonthAgo = new Date();
oneMonthAgo.setMonth(now.getMonth() - 1);

data.forEach(row => {
  if (!row.Content || row.Content.trim() === '') return;

  const quoteDate = new Date(row.Date);
  const li = document.createElement('li');
  li.classList.add('aranykopesek');

  const span = document.createElement('span');
  span.textContent = row.Content;

  if (quoteDate > oneMonthAgo) {
    span.classList.add('uj_szoveg');
    const ujIcon = document.createElement('img');
    ujIcon.src = 'Új.png';
    ujIcon.alt = 'Új';
    ujIcon.classList.add('uj');
    span.appendChild(ujIcon);
  }

  li.appendChild(span);

  // Másolás ikon
  const copyIcon = document.createElement('img');
  copyIcon.src = 'Másolás.png';
  copyIcon.alt = 'Másolás ikon';
  copyIcon.className = 'copy-icon';
  copyIcon.title = 'Másolás vágólapra';
  copyIcon.onclick = function () { copyToClipboard(this); };

  // Nagyítás ikon
  const zoomIcon = document.createElement('img');
  zoomIcon.src = 'Szem.png';
  zoomIcon.alt = 'Szem ikon';
  zoomIcon.className = 'zoom-icon';
  zoomIcon.title = 'Nagyítás';
  zoomIcon.onclick = function () { showPopup(row.Content); };

  // BeluszkyAI ikon
  const aiIcon = document.createElement('img');
  aiIcon.src = 'BeluszkyAI.png';
  aiIcon.alt = 'BeluszkyAI';
  aiIcon.className = 'Beluszky-icon';
  aiIcon.title = 'Beszélj BeluszkyAI-jal';
  aiIcon.onclick = () => openBeluszkyAI(row.Content);

  li.append(copyIcon, zoomIcon, aiIcon);
  quoteList.appendChild(li);
});
});

//Hirdetés
const ads = [
  {
    img: "Aranyköpés.jpg",
    title: "A hatalmas köpés, méghozzá aranyból",
    text: "Bár itt aranyköpéseket írunk le, megnyugodhat nem lesz nedves. Elméletileg. Ugyanakkor ajánjuk a papírzsebkendő kézhez ragadását, hisz örömkönnyekben gazdag időtöltés lesz, ezt garantáljuk!"
  },
  {
    img: "Beluszky.jpg",
    title: "Köszönetnyílvántás",
    text: "Egy biztos: Nem minden hős visel köpenyt! Köszönjük a Legendának, aki legjobb gondolataival és eszével színesíti társadalmunkat, és persze mindennapjainkat! A legnagyobb, a csodálatos, a jószívű, az egyetlen, örökkké (szigorúan 3 k-val)!"
  },
  {
    img: "Megosztás.png",
    title: "Oszd meg az élményt másokkal is!",
    text: "A jó dolgok közösen a legjobbak! Másold ki a kedvenc idézeteid, majd a megosztás ikonra kattintva oszd meg ismerőseiddel, hogy ők is röhöghessenek egy jót!"
  },
  {
    img: "BeluszkyAI.png",
    title: "Van remény?",
    text: "Bizony! Sosem fogsz unatkozni, ha kipróbálod a #BeluszkyAI-t! Nyomj az Aranyköpés melletti BeluszkyAI robotra és csevegj egy jó a bár nem igazi, még is élethű Beluszkyval!"
  }
];

let index = 0;
const slide = document.querySelector('.ad-slide');
const left = document.querySelector('.ad-nav.left');
const right = document.querySelector('.ad-nav.right');

function renderAd(i) {
  const ad = ads[i];
  slide.innerHTML = `
    <img src="${ad.img}" alt="Hirdetés ikon">
    <div class="ad-text">
      <h4>${ad.title}</h4>
      <p>${ad.text}</p>
    </div>
  `;
}

left.addEventListener('click', () => {
  index = (index - 1 + ads.length) % ads.length;
  renderAd(index);
});

right.addEventListener('click', () => {
  index = (index + 1) % ads.length;
  renderAd(index);
});
