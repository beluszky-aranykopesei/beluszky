import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://wqerrkvnnwdyphnbvjrn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxZXJya3ZubndkeXBobmJ2anJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTI5NTgsImV4cCI6MjA2MDk4ODk1OH0.rSQfUSGCzbn4bySlnCaAjFDhgTsFys8y_fA57ntZ1DI'; // public kulcs a Supabase Settingsben

const supabase = createClient(supabaseUrl, supabaseKey);

supabase
  .from('quotes')
  .select('*')
  .order('Date', { ascending: false })
  .then(({ data, error }) => {
    if (error) {
      console.error('Supabase hiba:', error.message);
      return;
    }

    const container = document.getElementById('aranykopesek');

    data.forEach(row => {
      const li = document.createElement('li');
      li.classList.add('kopes-item'); // stílusozáshoz

      // 🟨 Szöveg elem
      const textSpan = document.createElement('span');
      textSpan.textContent = row.Content;
      textSpan.classList.add('kopes-text');

      // 🟩 Ikon konténer
      const iconBox = document.createElement('div');
      iconBox.classList.add('icon-box');

      // 📋 Másolás ikon
      const copyBtn = document.createElement('button');
      copyBtn.innerHTML = '📋';
      copyBtn.title = 'Másolás';
      copyBtn.onclick = () => navigator.clipboard.writeText(row.Content);

      // 🔍 Nagyítás ikon
      const zoomBtn = document.createElement('button');
      zoomBtn.innerHTML = '🔍';
      zoomBtn.title = 'Nagyítás';
      zoomBtn.onclick = () => alert(row.Content); // később modal is lehet

      // 🤖 BeluszkyAI ikon (például link)
      const aiBtn = document.createElement('button');
      aiBtn.innerHTML = '🤖';
      aiBtn.title = 'Beszélj BeluszkyAI-jal';
      aiBtn.onclick = () => {
        window.open(`https://beluszky-aranykopesei.vercel.app/ai?quote=${encodeURIComponent(row.Content)}`, '_blank');
      };

      iconBox.append(copyBtn, zoomBtn, aiBtn);
      li.append(textSpan, iconBox);
      container.appendChild(li);
    });
  });

