import "./NavInfo.css";

function NavInfo() {
  return (
    <nav className="nav-info">
      <ul className="nav-info__container">
        <a className="nav-info__nav" href="#aboutProjectId">
          О проекте
        </a>
        <a className="nav-info__nav" href="#stackId">
          Технологии
        </a>
        <a className="nav-info__nav" href="#aboutMeId">
          Студент
        </a>
      </ul>
    </nav>
  );
}

export default NavInfo;
