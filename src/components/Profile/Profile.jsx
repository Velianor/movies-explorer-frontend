import { React, useState, useContext, useEffect } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useForm from "../../hooks/useForm";
import { validateName, validateEmail } from "../../utils/validateInput";

function Profile({ onProfileUpdate, onSignOut, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [isShowSaveButton, setShowSaveButton] = useState(false);
  const {
    values,
    errors,
    isFormValid,
    setIsFormValid,
    setValues,
    handleChange,
    formRef,
  } = useForm();

  useEffect(() => {
    setValues((userData) => ({
      ...userData,
      name: currentUser.name,
      email: currentUser.email,
    }));
  }, [currentUser, setValues]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsFormValid(false);
    }
  }, [currentUser, values, setIsFormValid]);

  function discardChanges() {
    setValues(currentUser);
  }

  const handleEditButtonClick = () => {
    setShowSaveButton(true);
  };

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   onProfileUpdate(values);
  //   if (
  //     errors &&
  //     validateName(values.name).invalid &&
  //     validateEmail(values.email).invalid
  //   ) {
  //     setShowSaveButton(true);
  //   } else {
  //     setShowSaveButton(false);
  //   }
  // }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (
      errors &&
      validateName(values.name).invalid &&
      validateEmail(values.email).invalid
    ) {
      setShowSaveButton(true);
    } else {
      setShowSaveButton(false);
    }
  }

  function handleSaveButtonClick() {
    if (isFormValid) {
      onProfileUpdate(values);
      setShowSaveButton(false);
    }
  }

  return (
    <main className="profile">
      <Header isLogged={true} />
      <section className="profile__wrap">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form
          className="profile__form"
          onSubmit={handleSubmit}
          noValidate
          ref={formRef}
        >
          <div className="profile__form-item">
            <label className="profile__label">Имя</label>
            <input
              className={`profile__input ${errors.name ? "error" : ""}`}
              name="name"
              type="text"
              id="name"
              value={values.name || ""}
              onChange={handleChange}
              onFocus={handleEditButtonClick}
              disabled={isLoading}
              required
              placeholder="Имя"
            />
            <span className="profile__error">
              {errors.name || validateName(values.name).message}
            </span>
          </div>
          <div className="profile__form-item">
            <label className="profile__label">E-mail</label>
            <input
              className={`profile__input ${errors.email ? "error" : ""}`}
              name="email"
              id="email"
              type="email"
              value={values.email || ""}
              onChange={handleChange}
              onFocus={handleEditButtonClick}
              disabled={isLoading}
              required
              placeholder="E-mail"
            />
            <span className="profile__error">
              {errors.email || validateEmail(values.email).message}
            </span>
          </div>
        </form>
        {isShowSaveButton && !isLoading && (
            <>
              <button
                className="profile__button-save"
                disabled={
                  !isFormValid ||
                  validateName(values.name).invalid ||
                  validateEmail(values.email).invalid ||
                  (errors.email && "error")
                }
                type="submit"
                onClick={handleSaveButtonClick}
              >
                Сохранить
              </button>
              <button
                className="profile__button"
                type="button"
                onClick={discardChanges}
              >
                Отмена
              </button>
            </>
          )}
          {!isShowSaveButton && !isLoading && (
            <>
              <button
                className="profile__button profile__button_edit"
                onClick={handleEditButtonClick}
                type="button"
              >
                Редактировать
              </button>
              <button
                className="profile__button profile__button_logout"
                onClick={onSignOut}
                type="button"
              >
                <NavLink to="/" className="profile__link profile__link_logout">
                  Выйти из аккаунта
                </NavLink>
              </button>
            </>
          )}
      </section>
    </main>
  );
}

export default Profile;
