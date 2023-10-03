import "./MoviesCard.css";
import { formatMovieDuration } from '../../utils/constans';

function MoviesCard({ movie, isSavedMoviesPage, onDelete, onSave, isSaved, link }) {
  const { nameRU, duration, trailerLink } = movie;

  function handleDeleteMovie() {
    onDelete(movie);
  };

  function handleSaveMovie() {
    onSave(movie);
  };

  const getButtonMarkup = () => {
    if (isSaved && !isSavedMoviesPage) {
      return (
        <button
        className='movieCard__btn movieCard__btn_saved'
        onClick={handleDeleteMovie}
        />
      );
    } else if (isSavedMoviesPage) {
      return (
        <button
        className='movieCard__btn movieCard__btn_remove'
        onClick={handleDeleteMovie}
        />
      );
    }
    return (
      <button
      className='movieCard__btn movieCard__btn_save'
      onClick={handleSaveMovie}
      />
    );
  };

  return (
    <li className="movieCard">
      <a href={trailerLink} target='_blanck'>
      <img className="movieCard__image" src={link} alt={nameRU} />
      </a>
      <div className="movieCard__desc">
        <div className="movieCard__container">
        <h3 className="movieCard__title">{nameRU}</h3>
        <p className="movieCard__duration">{formatMovieDuration(duration)}</p>
        </div>
        {getButtonMarkup()}
      </div>
    </li>
  );
};

export default MoviesCard;