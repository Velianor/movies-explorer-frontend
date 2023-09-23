import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutProject" id={`aboutProjectId`}>
      <h2 className="aboutProject__title block-title">О проекте</h2>
      <div className="aboutProject__description">
        <div className="aboutProject__description-block">
          <h4 className="aboutProject__description-title">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="aboutProject__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__description-block">
          <h4 className="aboutProject__description-title">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="aboutProject__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__line">
        <div className="aboutProject__line-block">
          <p className="aboutProject__line-time aboutProject__line-time_backend">
            1 неделя
          </p>
          <p className="aboutProject__line-description">Back-end</p>
        </div>
        <div className="aboutProject__line-block">
          <p className="aboutProject__line-time aboutProject__line-time_frontend">
            4 недели
          </p>
          <p className="aboutProject__line-description">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
