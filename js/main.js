var menuToggle =  document.querySelector(".menu__toggle");
var menuList = document.querySelector(".menu__list");

  menuList.classList.add("menu__list--hidden");

menuToggle.addEventListener("click", function(event) {
  event.preventDefault();

  menuList.classList.toggle("menu__list--hidden");
});

var makeOrder = document.querySelector(".preview__btn");
var modalCart = document.querySelector(".modal-cart");
var modalOverlay = document.querySelector(".modal-overlay");

if (makeOrder) {
  makeOrder.addEventListener("click", function(event) {
    event.preventDefault();

    modalCart.classList.add("modal-cart--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
};

//TODO: Добавить закрытие по кнопке ESC
