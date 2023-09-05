import "./Stack.css";

function Stack() {
  return (
    <section className="stack">
      <h2 className="block-title">Технологии</h2>
      <h3 className="stack__title">7 технологий</h3>
      <p className="stack__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="stack__list">
        <li className="stack__item">HTML</li>
        <li className="stack__item">CSS</li>
        <li className="stack__item">JS</li>
        <li className="stack__item">React</li>
        <li className="stack__item">Git</li>
        <li className="stack__item">Express.js</li>
        <li className="stack__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Stack;
