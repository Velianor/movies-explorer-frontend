import "./AuthForm.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { validateName, validateEmail } from "../../utils/validateInput";
import { useState } from "react";

function AuthForm({ type, text, onSubmitForm }) {
  const { values, errors, isFormValid, handleChange, formRef } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);

  const signupForm = () => {
    if (type === "signup") {
      return (
        <div className="auth__form-item">
          <label className="auth__label">Имя</label>
          <input
            className={`auth__input ${errors.name ? "error" : ""}`}
            name="name"
            type="name"
            value={values.name || ""}
            onChange={handleChange}
            required
            placeholder="Введите имя"
            minLength={2}
            maxLength={30}
          />
          <span className="auth__error">
            {errors.name || validateName(values.name).message}
          </span>
        </div>
      );
    }
  };
  async function handleSubmit(evt) {
    evt.preventDefault();

    if (!isSubmitting) {
      setSubmitting(true);

      try {
        // Вызываем onSubmitForm и передаем ему функцию, которая будет вызвана после выполнения запроса
        await onSubmitForm(values);
      } catch (error) {
        console.error("Error submitting form:", error);
        // Обработка ошибок, например, вывод ошибки или обновление состояния ошибки
      } finally {
        setSubmitting(false); // Вне зависимости от успешности запроса сбрасываем флаг isSubmitting
      }
    }
  }

  return (
    <main className="auth">
      <section className="auth__section">
        <Link to="/">
          <img className="auth__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="auth__title">{text.title}</h1>
        {signupForm()}
        <form
          className="auth__form"
          onSubmit={handleSubmit}
          noValidate
          ref={formRef}
        >
          <div className="auth__container">
            <div className="auth__form-item">
              <label className="auth__label">E-mail</label>
              <input
                className={`auth__input  ${errors.email ? "error" : ""}`}
                name="email"
                type="email"
                value={values.email || ""}
                onChange={handleChange}
                required
                placeholder="Введите почту"
              />
              <span className="auth__error">
                {errors.email || validateEmail(values.email).message}
              </span>
            </div>
            <div className="auth__form-item">
              <label className="auth__label">Пароль</label>
              <input
                className={`auth__input ${errors.password ? "error" : ""}`}
                name="password"
                type="password"
                value={values.password || ""}
                onChange={handleChange}
                required
                placeholder="Введите пароль"
                minLength={8}
                maxLength={30}
              />
              <span className="auth__error">{errors.password}</span>
            </div>
          </div>
          <div className="auth__buttons">
            <button
              className="auth__btn"
              type="submit"
              disabled={!isFormValid || validateEmail(values.email).invalid || isSubmitting}
            >
              {text.buttonText}
            </button>
            <p className="auth__question">
              {text.questText}
              {type === "signup" ? (
                <Link className="auth__link" to="/signin">
                  Войти
                </Link>
              ) : (
                <Link className="auth__link" to="/signup">
                  Регистрация
                </Link>
              )}
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}

export default AuthForm;
