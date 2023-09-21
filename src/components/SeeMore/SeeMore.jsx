import "./SeeMore.css";

function SeeMore({ seeMore }) {
  return (
    <div className={!seeMore ? "see-more see-more_hide" : "see-more"}>
      <button className="see-more__btn" type="button">
        Ещё
      </button>
    </div>
  );
}

export default SeeMore;
