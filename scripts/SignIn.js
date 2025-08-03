function openAccountPopup() {
  document.getElementById('account-overlay').style.display = 'block';
  document.getElementById('account-popup').style.display = 'block';
  console.log('Account overlay megjelent!');
}

function closeAccountPopup() {
  document.getElementById('account-overlay').style.display = 'none';
  document.getElementById('account-popup').style.display = 'none';
}

function LogIn() {
  const loginForm = `
    <div id="loginForm">
      <input type="text" placeholder="Felhasználónév" class="popup-input" />
      <input type="password" placeholder="Jelszó" class="popup-input" />
      <button class="popup-button">Bejelentkezés</button>
      <a href="#" class="popup-magic">Beluszky Titkos linkje</a>
    </div>
  `;
  document.getElementById("account-popup").innerHTML = loginForm;
}


const popupOverlay = document.getElementById("account-overlay");

popupOverlay.addEventListener("click", function () {
  closeAccountPopup(); // Meghívja a saját záró függvényt
});
