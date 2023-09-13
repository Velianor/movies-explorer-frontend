import "./MoviesCard.css";

function MoviesCard({ movie, isSavedMoviesPage }) {
  function formatMovieDuration(duration) {
    if (duration >= 60) {
      const minutes = duration % 60;
      return `${Math.floor(duration / 60)}ч ${
        minutes > 0 ? minutes + "м" : ""
      }`;
    }
    return `${duration}м`;
  }

  const { nameRU, image, duration, saved } = movie;
  const formatedDuration = formatMovieDuration(duration);

  const buttonClass = () => {
    if (saved && !isSavedMoviesPage) {
      return "movieCard__btn_saved";
    } else if (isSavedMoviesPage) {
      return "movieCard__btn_remove";
    }
    return "movieCard__btn_save";
  };

  return (
    <li className="movieCard">
      <img className="movieCard__image" src={image} alt={nameRU} />
      <div className="movieCard__desc">
        <h3 className="movieCard__title">{nameRU}</h3>
        <button className={`movieCard__btn ${buttonClass()}`} />
      </div>
      <p className="movieCard__duration">{formatedDuration}</p>
    </li>
  );
}

export default MoviesCard;
