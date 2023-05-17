import './index.css';
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import {
  editButton,
  addButton,
  profileName,
  inputName,
  inputWork,
  profileWork,
  formEditProfile,
  formCard,
  avatarForm,
  options,
  fullImgPopup,
  popupEditProfile,
  popupAddItems,
  profileAvatar,
  popupDelete,
  popupAvatar
} from "../utils/constans.js";
import Api from '../components/Api.js';
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'ff030528-9532-4382-9be9-66fb434177d2',
    'Content-Type': 'application/json'
  }
})
let userId=null;
const formProfileValidator = new FormValidator(options,formEditProfile);
formProfileValidator.enableValidation();
const formCardValidator = new FormValidator(options, formCard);
formCardValidator.enableValidation();
const formAvatarValidator = new FormValidator(options,avatarForm)
formAvatarValidator.enableValidation();
const user = new UserInfo({name: profileName, about: profileWork, avatar: profileAvatar });
const popupWithImage = new PopupWithImage(fullImgPopup);


Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {    
    userId = userData._id;
    user.setUserInfo(userData);
      displayInitialCards.renderItems(cardsData);    
    user.setAvatar(userData);
  })
  .catch(err => console.log(err));


const popupCardDeleteConfirm = new PopupWithSubmit(popupDelete);


const renderCard = (element) => {
  const card = new Card(element, '#element',userId, () => {
    popupWithImage.open(element)
  }, {
    handleLikeClick: () => {
      api.changeLikeStatus(element._id, !card.getLikeStatus())
        .then((res) => {
          card.isLiked = card.setLikes(res);
        })
        .catch(err => console.log(err));
    }
  },
  {handleDeleteCard: (card) => {
   popupCardDeleteConfirm.open();
    popupCardDeleteConfirm.setSubmitAction(() => {
      api.deleteCard(element._id)
        .then(() => {
          card.deleteCard();
          popupCardDeleteConfirm.close();
        })
        .catch(err => console.log(err));
    });
  }});
  const cardElement =  card.generateCard();
  return cardElement;
}
const displayInitialCards = new Section({renderer: (item)=>{
  displayInitialCards.addItem(renderCard(item))
}}, ".elements");


const popupEdit = new PopupWithForm(popupEditProfile,{ 
  handleFormSubmit: (inputData)=>{
      api.changeUserInfo(inputData).then((res) => {
      user.setUserInfo(res);
      popupEdit.close();
    }).catch(console.log)
    .finally(() => popupEdit.renderLoading(false, 'Сохранить'))
  }
  },
  );


const popupEditAvatar=new PopupWithForm(popupAvatar,{
  handleFormSubmit: (item) => {
    api.editAvatar(item)
      .then((res) => {
        user.setAvatar({ avatar: res.avatar});
        popupEditAvatar.close();
      })
      .catch(err => console.log(err))
      .finally(() => popupEditAvatar.renderLoading(false, 'Сохранить'))
  }
})
profileAvatar.addEventListener('click',()=>{
  popupEditAvatar.open();
})



const popupAdd = new PopupWithForm(popupAddItems, {
  handleFormSubmit: (item) => {
  api.createNewCard(item).then((res) => {
      displayInitialCards.addItem(renderCard(res));
      popupAdd.close();
    })
    .catch((err) => console.error(err))
    .finally(() => popupAdd.renderLoading(false, 'Создать'))
}});




editButton.addEventListener('click', () => {
  popupEdit.open()
  const userObject = user.getUserInfo();
  inputName.value = userObject.name;
  inputWork.value = userObject.about;
  
})

addButton.addEventListener('click', () => {
  popupAdd.open()
  formCardValidator.disableButton();
})

popupAdd.setEventListeners();
popupCardDeleteConfirm.setEventListeners();
popupWithImage.setEventListeners();
popupEdit.setEventListeners();
popupEditAvatar.setEventListeners();