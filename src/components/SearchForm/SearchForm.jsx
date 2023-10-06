import "./SearchForm.css";
import useForm from "../../hooks/useForm";
import useMoviesFilter from "../../hooks/useMoviesFilter";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({
  setMovies,
  movies,
  setFilteredMovies,
  isMoviesSearched,
  setIsMoviesSearched,
  isSavedMoviesSearched,
  setIsSavedMoviesSearched,
  showMovieSearch,
}) {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const { values, setValues, handleChange, isFormValid, formRef } = useForm();
  const { filteredMovies } = useMoviesFilter(movies, values.film, isChecked);

  useEffect(() => {
    if (location.pathname === "/saved-movies" && isSavedMoviesSearched) {
      setFilteredMovies(filteredMovies);
    } else if (location.pathname === "/saved-movies") {
      setFilteredMovies(movies);
    }
  }, [
    filteredMovies,
    setFilteredMovies,
    location,
    isSavedMoviesSearched,
    movies,
  ]);

  useEffect(() => {
    if (isMoviesSearched && location.pathname === "/movies") {
      localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
      localStorage.setItem("isChecked", isChecked);
      localStorage.setItem("filmQuery", values.film);
    }
  }, [filteredMovies, isChecked, values.film, isMoviesSearched, location]);

  useEffect(() => {
    if (location.pathname === "/movies") {
      const filtredMoviesFromLS =
        localStorage.getItem("filteredMovies") === "undefined" ||
        localStorage.getItem("filteredMovies") === []
          ? []
          : JSON.parse(localStorage.getItem("filteredMovies"));
      const isCheckedFromLS = localStorage.getItem("isChecked") === "true";
      const filmQueryFromLS = localStorage.getItem("filmQuery");

      if (filmQueryFromLS) {
        setFilteredMovies(filtredMoviesFromLS);
        setIsChecked(isCheckedFromLS);
        handleChange({ target: { name: "film", value: filmQueryFromLS } });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredMovies, setFilteredMovies, location]);

  useEffect(() => {
    if (location.pathname === "/movies" && isMoviesSearched) {
      localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
      localStorage.setItem("isChecked", isChecked);
    }
  }, [filteredMovies, isChecked, isMoviesSearched, location]);

  useEffect(() => {
    if (location.pathname === "/movies") {
      const filteredMoviesFromLS = JSON.parse(localStorage.getItem("filteredMovies")) || [];
      const isCheckedFromLS = localStorage.getItem("isChecked") === "true";
  
      if (filteredMoviesFromLS.length > 0) {
        setFilteredMovies(filteredMoviesFromLS);
        setIsChecked(isCheckedFromLS);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  


  function showSavedMovieSearch() {
    if (setIsSavedMoviesSearched) {
      setMovies((savedMovies) => [...savedMovies]);
      setIsSavedMoviesSearched(true);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (location.pathname === "/movies") {
      showMovieSearch();
      setIsMoviesSearched(true);
      return;
    }
    showSavedMovieSearch();
  }

  function toggleCheckbox() {
    if (isFormValid && location.pathname === "/movies") {
      setIsChecked(!isChecked);
      showMovieSearch();
      setIsMoviesSearched(true);
    } else if (movies.length !== 0) {
      setIsChecked(!isChecked);
      showSavedMovieSearch();
    } else {
      setIsChecked(!isChecked);
    }
  }

  const handleFilmChange = (e) => {
    console.log("Handling film change");
    setValues({ ...values, film: e.target.value });
  };

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={handleSubmit}
        noValidate
        ref={formRef}
      >
        <span className="search__icon" />
        <div className="search__input-wrap">
          <input
            className="search__input"
            type="text"
            id="input"
            placeholder="Фильм"
            required
            value={values.film}
            onChange={handleFilmChange}
          />
          <button className="search__button" type="submit"></button>
        </div>
        <div className="search__checkbox-wrap">
      <label className="search__checkbox-switch">
        <input
          className="search__checkbox"
          id="search-checkbox"
          type="checkbox"
          onChange={toggleCheckbox}
          checked={isChecked}
        />
        <span className="search__checkbox-slider round" />
      </label>
      <p className="search__checkbox-title">Короткометражки</p>
    </div>
      </form>
      <hr />
    </section>
  );
}

export default SearchForm;
