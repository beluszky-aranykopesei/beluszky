document.getElementById("legfrissebb").addEventListener("click", () => {
    const portal = document.getElementById("hirportal");
    const hatter = document.getElementById("hirlap-hatter");

    hatter.classList.remove("hidden");
    portal.classList.remove("hidden");

    setTimeout(() => {
        hatter.classList.add("show");
        portal.classList.add("show");
    }, 10);
});

function closeHirportal() {
    const portal = document.getElementById("hirportal");
    const hatter = document.getElementById("hirlap-hatter");

    portal.classList.remove("show");
    hatter.classList.remove("show");

    setTimeout(() => {
        portal.classList.add("hidden");
        hatter.classList.add("hidden");
    }, 500);
}
