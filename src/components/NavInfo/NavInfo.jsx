import "./NavInfo.css";

function NavInfo() {
  return (
    <nav className="nav-info">
      <ul className="nav-info__container">
        <a className="nav-info__link " href="#aboutProjectId">
          О проекте
        </a>
        <a className="nav-info__link" href="#stackId">
          Технологии
        </a>
        <a className="nav-info__link" href="#aboutMeId">
          Студент
        </a>
      </ul>
    </nav>
  );
}

export default NavInfo;
