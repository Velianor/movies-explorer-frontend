import "./AboutMe.css";
import avatar from "../../images/avatar.png";

function AboutMe() {
  return (
    <section className="aboutMe" id={`aboutMeId`}>
      <h2 className="aboutMe__title block-title">Студент</h2>
      <div className="aboutMe__info">
        <div className="aboutMe__section">
          <h4 className="aboutMe__name">Павел</h4>
          <p className="aboutMe__description">Web-разработчик, 27 лет</p>
          <p className="aboutMe__text">
            Проживаю в маленьком городке под названием Тобольск. Это находится в
            холодной Сибири. Есть уехать в теплый регион. Хочу быть мобильнее,
            поэтому когда закончу обучение надеюсь найти работу удаленно, ну или
            даже если офлайн, то в каком нибудь большом городе.
          </p>
          <a
            className="aboutMe__link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Velianor"
          >
            Github
          </a>
        </div>
        <img className="aboutMe__photo" src={avatar} alt="фото" />
      </div>
    </section>
  );
}

export default AboutMe;
