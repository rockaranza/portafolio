const btnMenu = document.getElementById("menuButton");
const linkMenu = document.getElementById("test");

const menu = document.getElementById("mainNav");
function mostrarMenu(){
    menu.classList.toggle("mostrar");
}

btnMenu.addEventListener("click", mostrarMenu);
linkMenu.addEventListener("click", mostrarMenu);