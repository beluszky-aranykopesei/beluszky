function openAccountPopup() {
  document.getElementById('account-overlay').style.display = 'block';
  document.getElementById('account-popup').style.display = 'block';
  console.log('Account overlay megjelent!');
}

function closeAccountPopup() {
  document.getElementById('account-overlay').style.display = 'none';
  document.getElementById('account-popup').style.display = 'none';
}

function createAccount() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  if (username && password) {
    alert(`Üdv, ${username}! Fiók létrehozva.`);
    closeAccountPopup();
    // Ide jöhet majd a tárolás (localStorage, backend, stb.)
  } else {
    alert('Kérlek, minden mezőt tölts ki!');
  }
}

const popupOverlay = document.getElementById("popupOverlay");

popupOverlay.addEventListener("click", function () {
  closeAccountPopup(); // Meghívja a saját záró függvényt
});
