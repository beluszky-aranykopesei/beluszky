import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://wqerrkvnnwdyphnbvjrn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxZXJya3ZubndkeXBobmJ2anJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTI5NTgsImV4cCI6MjA2MDk4ODk1OH0.rSQfUSGCzbn4bySlnCaAjFDhgTsFys8y_fA57ntZ1DI'');

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
