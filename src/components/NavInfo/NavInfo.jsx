import "./NavInfo.css";

function NavInfo() {
  return (
    <div className="nav-info">
      <div className="nav-info__container">
        <a className="nav-info__nav" href="#aboutProjectId">
          О проекте
        </a>
        <a className="nav-info__nav" href="#stackId">
          Технологии
        </a>
        <a className="nav-info__nav" href="#aboutMeId">
          Студент
        </a>
      </div>
    </div>
  );
}

export default NavInfo;
