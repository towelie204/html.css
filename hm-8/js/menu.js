burger.onclick = function activateNav() {
    let burgerIcon = document.getElementById("burgerIcon");
    let menu = document.getElementById("navMenu");
    
    if (burgerIcon.className === "fa fa-bars") {
        burgerIcon.className += " fa fa-bars_active";
    } else {
        burgerIcon.className = "fa fa-bars";
    }
    
    if (menu.className === "main-nav__ul") {
        menu.className += " main-nav__ul_active";
    } else {
        menu.className = "main-nav__ul";
    }
}