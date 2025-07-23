import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://YOUR_PROJECT_ID.supabase.co', 'public-anon-key');

document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Bejelentkezés jelszóval
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Ha nincs fiók, próbáljuk regisztrálni
    const signup = await supabase.auth.signUp({ email, password });
    alert(signup.error ? `Hiba: ${signup.error.message}` : '✅ Sikeres regisztráció! Nézd meg az emailed a megerősítéshez.');
  } else {
    alert('✅ Bejelentkezve!');
  }
});

// Magic Link belépés
document.getElementById('magicLinkBtn').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const { error } = await supabase.auth.signInWithOtp({ email });

  alert(error ? `Hiba: ${error.message}` : '📩 Magic Link elküldve, ellenőrizd az emailed!');
});
