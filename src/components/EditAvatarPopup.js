import PopupWithForm from "./PopupWithForm.js";
import { useState, useContext, useEffect } from "react";
function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      textButton="Сохранить"
      onClose={props.onClose}
      isOpen={props.isOpen}
    >
      <fieldset className="form">
        <label className="form__input-label">
          <input
            type="url"
            className={"popup__input popup__input_type_placeImage"}
            placeholder="Ссылка на картинку"
            name="link"
            required
          />
          <span
            className="popup__input-error popup__input-error_active"
            id="url-error-avatar"
          ></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
