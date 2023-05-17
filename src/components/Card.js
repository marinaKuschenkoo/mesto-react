import React from "react";
function Card(props){
    const handleClick = () => props.onCardClick(props.card);
      return(
        <div className="element">
        <button className="element__trash" type="button"></button>
        <img className="element__img" src={props.link} alt={props.name} onClick={handleClick}/>
        <div className="element__container">
            <h2 className="element__descr">{props.name}</h2>
            <div className="element__likes">
                <button className="element__like-container"></button>
                <p className="element__likes-number">{props.likes}</p>
            </div>
        </div>
    </div>
      )
    
}

export default Card;