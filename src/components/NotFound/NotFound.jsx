import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="notFound__error">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__desc">Страница не найдена</p>
      <Link className="not_found__link" to={-1}>
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
