// Select element
var icon = document.querySelector('.icon-menu-mobile');
var menu = document.querySelector('.responsive-navbar__items');

// Event listner
icon.addEventListener("click", function() {

  // Toggle class (add/remove)
  icon.classList.toggle("icon-menu-mobile--opened");
  if (icon.classList.contains("icon-menu-mobile--opened")) {
    menu.classList.remove("responsive-navbar__items--hide");
    menu.classList.add("responsive-navbar__items--show");
  } else {
    menu.classList.remove("responsive-navbar__items--show");
    menu.classList.add("responsive-navbar__items--hide");
    setTimeout(function(){
      menu.classList.remove("responsive-navbar__items--hide");
    }, 500);
  }
});
