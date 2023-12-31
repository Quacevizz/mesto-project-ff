import { openPopup, closePopup } from "./modal.js";
import { initialCards, createCard } from "./card.js";
import "../pages/index.css";
//Попап профиля
const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const formElement = popupProfile.querySelector(".popup__form");
const nameInput = popupProfile.querySelector(".popup__field_value_name");
const jobInput = popupProfile.querySelector(".popup__field_value_description");
const popupButtonClose = popupProfile.querySelector(".popup__close");
const valueName = document.querySelector(".profile__title");
const valueJob = document.querySelector(".profile__subtitle");
//Разворот картинки
const popupImg = document.querySelector(".popup_photo");
const popupButtonImgClose = document.querySelector(".popup__close_photo");
const photoImg = document.querySelector(".popup__image");
const photoFigcaption = document.querySelector(".popup__figcaption");
//Попап и список карточек
const popupCard = document.querySelector(".popup_card");
const formCard = popupCard.querySelector(".popup__form");
const nameInputCard = popupCard.querySelector(".popup__field_value_name");
const urlInputCard = popupCard.querySelector(".popup__field_value_description");
const popupButtonCardClose = popupCard.querySelector(".popup__close");
const addButton = document.querySelector(".profile__add-button");
const cardSection = document.querySelector(".elements");
const cardTemplate = document.querySelector("#card-template").content;

/* TODO: Понять что происходит, уменьшить количество кода

 const popups = document.querySelectorAll('.popup')

      popups.forEach((popup) => {
          popup.addEventListener('mousedown', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                  closePopup(popup)
              }
              if (evt.target.classList.contains('popup__close')) {
                closePopup(popup)
              }
          })
      })
 */

//Сохранение значений
function savePopupProfile(evt) {
  evt.preventDefault();

  valueName.textContent = nameInput.value;
  valueJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

function renderCard(initialCards) {
  initialCards.forEach(function (item) {
    cardSection.append(createCard(item.name, item.link, deleteCard, likeCard, handleClick));
  });
}

function deleteCard(evt) {
  evt.target.closest(".card").remove();
}
function likeCard(evt) { 

  evt.target.classList.toggle("card__card-button_active"); 

} 

function handleClick(evt) {
  photoImg.src = evt.target.src; 
  photoFigcaption.textContent = evt.target.closest(".card").textContent; 
  photoImg.alt = evt.target.alt; 
      openPopup(popupImg)
}

renderCard(initialCards);

// Взаимодействие с карточками добавленными

function submitFormCard(evt) {
  evt.preventDefault();
  cardSection.prepend(createCard(nameInputCard.value, urlInputCard.value,deleteCard, likeCard, handleClick));
  closePopup(popupCard);
}

// Слушатель добавления карточки
formCard.addEventListener("submit", submitFormCard);
// Слушатель открыть/закрыть попапы
addButton.addEventListener("click", function () {
  formCard.reset();
  openPopup(popupCard);
});
editButton.addEventListener("click", function () {
  nameInput.value = valueName.textContent;
  jobInput.value = valueJob.textContent;
  openPopup(popupProfile);
});
popupButtonClose.addEventListener("click", function () {
  closePopup(popupProfile);

});
popupButtonCardClose.addEventListener("click", function () {
  closePopup(popupCard);
});
popupButtonImgClose.addEventListener("click", function () {
  closePopup(popupImg);
});

//Сохранение значений профиля
formElement.addEventListener("submit", savePopupProfile);

export { cardTemplate, nameInputCard, urlInputCard, photoFigcaption, photoImg, formCard };
export { popupProfile, popupCard, popupImg };
