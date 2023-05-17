import PopupWithForm from "./PopupWithForm.js";
import { useState, useContext, useEffect } from "react";
function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name={"edit-profile"}
      title={"Редактировать профиль"}
      textButton={"Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <fieldset className="form">
        <label className="form__input-label">
          <input
            className={"popup__input popup__input_type_name"}
            type={"text"}
            placeholder={"Ваше имя"}
            name={"name"}
            minLength={"2"}
            maxLength={"40"}
            required
          />
          <span
            id={"name-error"}
            className={"popup__input-error popup__input-error_active"}
          ></span>
          <input
            className={"popup__input popup__input_type_work"}
            type={"text"}
            placeholder={"Расскажите о себе"}
            name={"about"}
            minLength={"2"}
            maxLength={"200"}
            required
          />
          <span
            id={"about-error"}
            className={"popup__input-error popup__input-error_active"}
          ></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
