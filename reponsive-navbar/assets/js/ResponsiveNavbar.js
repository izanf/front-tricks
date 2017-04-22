function openMenu() {

  // Select element
  var icon = document.querySelector('.icon-menu-mobile');
  var menu = document.querySelector('.responsive-navbar__items')

  // Event listner
  icon.addEventListener("click", function() {

    // Toggle class (add/remove)
    icon.classList.toggle("icon-menu-mobile--opened");
    menu.classList.toggle("responsive-navbar__items--show");
  });
}

// Call function
openMenu();
