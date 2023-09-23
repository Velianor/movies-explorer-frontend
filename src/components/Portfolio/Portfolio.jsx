import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Velianor/how-to-learn"
          >
            Статичный сайт
            <span className="portfolio__website">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Velianor/russian-travel"
          >
            Адаптивный сайт
            <span className="portfolio__website">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Velianor/react-mesto-api-full-gha"
          >
            Одностраничное приложение
            <span className="portfolio__website">&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
