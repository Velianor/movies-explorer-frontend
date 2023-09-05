import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import movies from "../../utils/movies-array";
import NotFound from "../NotFound/NotFound";

const savedMovies = movies.filter((i) => i.saved);

function App() {
  return (
    <div className="page">
      <Routes>
        <Route exect path="/" element={<Main />} />
        <Route
          path="/movies"
          element={<Movies movies={movies} seeMore={true} />}
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              movies={savedMovies}
              seeMore={false}
              isSavedMoviesPage={true}
            />
          }
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
