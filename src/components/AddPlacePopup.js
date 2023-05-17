import PopupWithForm from "./PopupWithForm.js";
import { useState, useContext, useEffect } from "react";
function AddPlacePopup(props) {
  return (
    <PopupWithForm
      title="Новое место"
      name="add-items"
      isOpen={props.isOpen}
      onClose={props.onClose}
      textButton="Сохранить"
    >
      <fieldset className="form">
        <label className="form__input-label">
          <input
            type="text"
            className="popup__input popup__input_type_placeName"
            placeholder="Название"
            name="name"
            minLength="2"
            maxLength="30"
            required
          />
          <span
            className="popup__input-error popup__input-error_active"
            id="place-error"
          ></span>
        </label>
        <label className="form__input-label">
          <input
            type="url"
            className="popup__input popup__input_type_placeImage"
            placeholder="Ссылка на картинку"
            name="link"
            required
          />
          <span
            className="popup__input-error popup__input-error_active"
            id="url-error"
          ></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
