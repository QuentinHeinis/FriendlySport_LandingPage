


function Menu(){
    var noscroll = document.getElementById("html");
    var btn = document.getElementById("end");
    var element = document.getElementById("Menu");
    element.classList.toggle("header__toggle");
    btn.classList.toggle("header__burger--open");
    noscroll.classList.toggle("noscroll");
}