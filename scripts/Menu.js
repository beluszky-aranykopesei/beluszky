function toggleMenu() {
    const menu = document.getElementById("menu");
    
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        setTimeout(() => {
            menu.style.display = "none";
        }, 500); // animáció után elrejtjük
    } else {
        menu.style.display = "block";
        setTimeout(() => {
            menu.classList.add("show");
        }, 10); // várunk 10ms-et, hogy a transition elinduljon
    }
}
