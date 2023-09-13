import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavTab.css";
import account from "../../images/icon_accaunt.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function NavTab({ isLogged }) {
  return isLogged ? MoviesMenu() : LandingMenu();
}

function LandingMenu() {
  return (
    <nav className="navLanding ">
      <Link className="navLanding__link-reg" to="/signup">
        Регистрация
      </Link>
      <Link className="navLanding__link-login" to="/signin">
        Войти
      </Link>
    </nav>
  );
}

function MoviesMenu() {
  const setActive = ({ isActive }) =>
    isActive ? "navMovies__link navMovies__link_active" : "navMovies__link";
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  const burgerMenu = () => {
    if (!isBurgerMenuOpen) {
      return (
        <button className="navMovies__burger-btn" onClick={toggleBurgerMenu} />
      );
    }
    return <BurgerMenu onClose={toggleBurgerMenu} />;
  };

  return (
    <nav className="navMovies">
      <div className="navMovies__links">
        <NavLink className={setActive} to="/movies">
          Фильмы
        </NavLink>
        <NavLink className={setActive} to="/saved-movies">
          Сохранённые фильмы
        </NavLink>
      </div>
      <div className="navMovies__account-btn-wrap">
        <Link className="navMovies__account-btn" to="/profile">
          <img src={account} alt="аккаунт" />
          Аккаунт
        </Link>
      </div>
      {burgerMenu()}
    </nav>
  );
}

export default NavTab;
