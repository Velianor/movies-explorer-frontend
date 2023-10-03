import "./Movies.css";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import SeeMore from "../SeeMore/SeeMore";
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';
import useScreenWidth from '../../hooks/useScreenWidth';
import useCountMovies from '../../hooks/useCounMovie'

const Movies = ({ isLoading, movies, setMovies, deleteMovie, handleSaveMovie, filteredMovies, savedMovies, setFilteredMovies, likedMovies, errorMessages, showMovieSearch }) => {
  const [responseError, setResponseError] = useState('');
  const [isMoviesSearched, setIsMoviesSearched, setIsSavedMoviesSearched] = useState(false);
  const orientation = useScreenWidth();
  const { moviesRenderCounter, handleShowAddCards } = useCountMovies(orientation);

  return (
      <main className='movies'>
          <Header isLogged={true} />
          <SearchForm
              setMovies={setMovies}
              movies={movies}
              setFilteredMovies={setFilteredMovies}
              isMoviesSearched={isMoviesSearched}
              setIsMoviesSearched={setIsMoviesSearched}
              setResponseError={setResponseError}
              setIsSavedMoviesSearched={setIsSavedMoviesSearched}
              errorMessages={errorMessages}
              showMovieSearch={showMovieSearch}
          />
          {isLoading ? (
              <Preloader />
          ) : (
              <>
                  <MoviesCardList
                      responseError={responseError}
                      isMoviesSearched={isMoviesSearched}
                      likedMovies={likedMovies}
                      movies={filteredMovies}
                      setMovies={setMovies}
                      moviesRenderCounter={moviesRenderCounter}
                      isSavedMoviesPage={false}
                      savedMovies={savedMovies}
                      handleSaveMovie={handleSaveMovie}
                      deleteMovie={deleteMovie}
                  />
                  <div>
                      {filteredMovies?.length > moviesRenderCounter && (
                          <SeeMore onClick={handleShowAddCards} />
                      )}
                  </div>
              </>
          )}
          <Footer />
      </main>
  );
};

export default Movies;

