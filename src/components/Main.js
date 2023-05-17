import editButton from '../images/Edit_Button.svg';
import addButton from '../images/plus.svg'
import avatar from '../images/Avatar.png'
import avatarEditButton from '../images/edit_avatar.svg'
import api from '../utils/Api.js'
import { useEffect, useState, useContext } from 'react';
import Card from './Card.js'
function Main(props){

    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
          .then(res => {
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
          })
          .catch(err => console.log(`Error: ${err}`));
      }, []);
      useEffect(() => {
        api.getInitialCards()
        .then((res) => setCards(...cards, res))
        .catch((err) => console.log(err));
    }, []);

    return(
        <main className="main">
        <section className="profile">
            <div className="profile__avatar">
            <img src={userAvatar} alt="Фото профиля" className="profile__avatar-img" />
            <button onClick={props.onEditAvatar} className="profile__avatar-edit"></button>
            </div>
            <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}><img className="profile__edit-button-img" src={editButton} alt="Редактировать"/></button>
                <p className="profile__work">{userDescription}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}><img src={addButton} alt="Кнопка Добавить"/></button>
        </section>
        <section className="elements">
            {cards.map((card,id) => (
            <Card
            key={id}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
          />
          ))}
        </section>
 </main>
    )
}

export default Main;