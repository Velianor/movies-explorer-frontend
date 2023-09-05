import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import account from "../../images/icon_accaunt.svg";

function BurgerMenu({ onClose }) {
  return (
    <div className="burgerMenu">
      <div className="burgerMenu__wrap">
        <button
          className="burgerMenu__close-btn"
          type="button"
          onClick={onClose}
        />
        <nav className="burgerMenu__menu">
          <NavLink className="burgerMenu__link" to="/" onClick={onClose}>
            Главная
          </NavLink>
          <NavLink className="burgerMenu__link" to="/movies" onClick={onClose}>
            Фильмы
          </NavLink>
          <NavLink
            className="burgerMenu__link"
            to="/saved-movies"
            onClick={onClose}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <NavLink
          className="burgerMenu__account-btn"
          to="/profile"
          onClick={onClose}
        >
          <img src={account} alt="аккаунт" />
          Аккаунт
        </NavLink>
      </div>
    </div>
  );
}

export default BurgerMenu;
