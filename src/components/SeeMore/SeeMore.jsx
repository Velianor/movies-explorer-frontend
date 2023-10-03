import "./SeeMore.css";

function SeeMore({ onClick }) {
  return (
    <div className="see-more">
      <button className="see-more__btn" type="button" onClick={onClick}>
        Ещё
      </button>
    </div>
  );
}

export default SeeMore;
