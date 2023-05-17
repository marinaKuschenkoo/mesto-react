/*import logo from './logo.svg';*/
import { useEffect, useState, useContext } from 'react';
import '../App.css';
import Header from "./Header.js";
import Main from "./Main.js"
import Footer from "./Footer.js"
import EditProfilePopup from './EditProfilePopup.js';
import PopupWithForm from './PopupWithForm.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);


    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setSelectedCard(null)
      }

    const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true) }
    const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true) }
    const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) }
    const handleCardClick=(card)=>{setSelectedCard(card)}

    return (
    <div className="App" >
      <div className="page">
      <Header />
       <Main 
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

    </div>
    </div>
  );
}

export default App;
