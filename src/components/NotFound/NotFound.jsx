import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__desc">Страница не найдена</p>
        <Link className="not-found__link" to={-1}>
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
