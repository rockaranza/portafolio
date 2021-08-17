const btnMenu = document.getElementById("menuButton");
const menu = document.getElementById("mainNav");
const positionMenu = document.getElementById("header");
const scrollButton = document.getElementById("upButton");
const home = document.getElementById("homeLimit");

//MOSTRAR MENU
function mostrarMenu(){
    menu.classList.toggle("mostrar");
}

//CAMBIA COLOR HEADER
function positionHeader() {
    console.log(window.scrollY);
    if(window.scrollY > 60){
        header.classList.add("headerColor");
    }else{
        header.classList.remove("headerColor");
    }
}

//BOTON SUBIR
function scrollWindowTop() {
    let offsetMain = home.offsetTop;
    window.scrollTo(0,offsetMain);
}

function visibilityUpButton() {
    if(window.scrollY > 200) {
        scrollButton.classList.remove("hidden");
    }else{
        scrollButton.classList.add("hidden");
    }
}

//INVOCAR FUNCIONES
btnMenu.addEventListener("click", mostrarMenu);
document.addEventListener("scroll", positionHeader);
document.addEventListener("scroll", visibilityUpButton);
