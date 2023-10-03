import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState } from 'react';

function SavedMovies({
  savedMovies,
  setMovies,
  setIsLoading,
  deleteMovie,
  filteredSavedMovies,
  setFilteredSavedMovies,
  errorMessages,
}) {
  const [isSavedMoviesSearched, setIsSavedMoviesSearched] = useState(false);

  return (
    <main className='movies'>
       <Header isLogged={true} />
      <SearchForm
        setMovies={setMovies}
        movies={savedMovies}
        setFilteredMovies={setFilteredSavedMovies}
        setIsLoading={setIsLoading}
        isSavedMoviesSearched={isSavedMoviesSearched}
        setIsSavedMoviesSearched={setIsSavedMoviesSearched}
        errorMessages={errorMessages}
      />
      <MoviesCardList
        movies={filteredSavedMovies}
        isSavedMoviesSearched={isSavedMoviesSearched}
        deleteMovie={deleteMovie}
        isSavedMoviesPage={true}
      />
       <Footer />
    </main>
  );
}

export default SavedMovies;
