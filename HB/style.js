function show(){
    var menu = document.getElementById("menu");
    var menuSlide = document.getElementById("menu-slide");

    menu.onclick = function(){
    menu.classList.toggle("openmenu")
    menuSlide.classList.toggle("menuslide")
}
}

// function menuList(){
//     var menu = document.getElementById("menu");
//     var menulist = document.getElementById("menu-list");

//     menu.onclick = function(){
//         menu.classList.toggle("menuSlide")
//     }
// }