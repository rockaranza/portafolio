const btnMenu = document.getElementById("menuButton");

const menu = document.getElementById("mainNav");
function mostrarMenu(){
    menu.classList.toggle("mostrar");
}

btnMenu.addEventListener("click", mostrarMenu);
