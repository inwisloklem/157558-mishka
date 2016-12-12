var menuToggle =  document.querySelector(".menu__toggle");
var menuList = document.querySelector(".menu__list");

  menuList.classList.add("menu__list--hidden");

menuToggle.addEventListener("click", function(event) {
  event.preventDefault();

  menuList.classList.toggle("menu__list--hidden");
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
