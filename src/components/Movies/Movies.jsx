import "./Movies.css";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import SeeMore from "../SeeMore/SeeMore";

function Movies({ movies, seeMore, isSavedMoviesPage }) {
  return (
    <>
      <Header isLogged={true} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList movies={movies} isSavedMoviesPage={isSavedMoviesPage} />
        <SeeMore seeMore={seeMore} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
