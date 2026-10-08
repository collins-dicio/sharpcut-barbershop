const menuButton =
document.getElementById("menu-btn");
const navMenu =
document.getElementById("nav-menu");

menuButton.addEventListener("click", function(){
    navMenu.classList.toggle("active");
});
const menuLinks =
document.querySelectorAll("#nav-menu a");

menuLinks.forEach(function (link) {
    link.addEventListener("click",function ()
{

    navMenu.classList.remove("active");
});
});