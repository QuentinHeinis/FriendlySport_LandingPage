function Menu(){
    var element = document.getElementById("Menu");
    element.classList.toggle("header__toggle");
    var btn = document.getElementById("end");
    btn.classList.toggle("header__burger--open");
}