import "./Header.css";
import logoMain from "../../images/logo.svg";
import NavTab from "../NavTab/NavTab";
import { Link } from "react-router-dom";

function Header({ isLogged }) {
  return (
    <header
      className={`header ${!isLogged ? "header_landing" : "header_movies"}`}
    >
      <Link className="header__logo" to="/">
        <img src={logoMain} alt="Лого" />
      </Link>
      <NavTab isLogged={isLogged} />
    </header>
  );
}

export default Header;
