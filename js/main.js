var makeOrder = document.querySelector(".preview__btn");
var modalCart = document.querySelector(".modal-cart");
var modalOverlay = document.querySelector(".modal-overlay");

makeOrder.addEventListener("click", function(event) {
  event.preventDefault();

  modalCart.classList.add("modal-cart--visible");
  modalOverlay.classList.add("modal-overlay--visible");
});

//TODO: Добавить закрытие по кнопке ESC
