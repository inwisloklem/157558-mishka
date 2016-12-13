var menuToggle =  document.querySelector(".menu__toggle");
var menuItems = document.querySelectorAll(".menu__item");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].classList.add("menu__item--hidden");
}

menuToggle.addEventListener("click", function(event) {
  event.preventDefault();

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle("menu__item--hidden");
  }

  menuToggle.classList.toggle("menu__toggle--close");
});

var makeOrder = document.querySelector(".preview__btn");
var modalCart = document.querySelector(".modal-cart");
var body = document.querySelector("body");

if (makeOrder) {
  makeOrder.addEventListener("click", function(event) {
    event.preventDefault();

    modalCart.classList.add("modal-cart--visible");
    body.classList.add("modal-overlay");
  });
};

//TODO: Добавить закрытие по кнопке ESC
