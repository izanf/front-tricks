function iconMenuMobile() {

  // Select element
  var menu = document.querySelector('.icon-menu-mobile');

  // Event listner
  menu.addEventListener("click", function() {

    // Toggle class (add/remove)
    menu.classList.toggle("icon-menu-mobile--opened");
  });
}

// Call function
iconMenuMobile();
