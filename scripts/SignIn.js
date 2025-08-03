function openAccountPopup() {
  document.getElementById('account-overlay').style.display = 'block';
  document.getElementById('account-popup').style.display = 'block';
  console.log('Account overlay megjelent!');
}

function closeAccountPopup() {
  document.getElementById('account-overlay').style.display = 'none';
  document.getElementById('account-popup').style.display = 'none';
}

const popupOverlay = document.getElementById("popupOverlay");

popupOverlay.addEventListener("click", function () {
  closeAccountPopup(); // Meghívja a saját záró függvényt
});
