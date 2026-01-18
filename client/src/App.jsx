import { Routes, Route, BrowserRouter, useParams } from "react-router";
// css
import "./App.css";
// components
import SplashPage from "./components/SplashPage";
import Movies from "./components/Movies";
import MoviePage from "./components/MoviePage";
import Comments from "./components/Comments";

import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import { useState } from "react";
import MoviesByGenre from "./components/MoviesByGenre";
// TODO: set up routing system and import relevant component for each route
// ! have component for root route and a not found page

// ! CONDITIONAL RENDERING

export default function App() {
  const [movieData, setMovieData] = useState({});
  const [userData, setUserData] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [movieSelect, setMovieSelect] = useState({});
  const [genreChoice, setGenreChoice] = useState({});

  const { id } = useParams();
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        {/*routing system*/}
        <Routes>
          {/* home route */}
          <Route path={"/"} element={<SplashPage />} />
          {/* lost route */}
          <Route path="*" element={<NotFoundPage />} />
          {/* actual pages */}
          <Route
            path={"/movies"}
            element={
              <Movies
                movieData={movieData}
                setMovieData={setMovieData}
                movieSelect={movieSelect}
                setMovieSelect={setMovieSelect}
              />
            }
          />
          <Route
            path={"/genre/:genre"}
            element={
              <MoviesByGenre
                genreChoice={genreChoice}
                setGenreChoice={setGenreChoice}
                movieData={movieData}
                setMovieData={setMovieData}
                movieSelect={movieSelect}
                setMovieSelect={setMovieSelect}
              />
            }
            // if this is a dynamic route the ':genre' bit changes
            // if I create one additional component and give it the movieData stuff but within it searchPArams.get
            //  which each use different fetch components
          />
          <Route
            path={"/movieselection/:movie_id"}
            element={
              <MoviePage
                movieData={movieData}
                movieSelect={movieSelect}
                setMovieSelect={setMovieSelect}
              />
            }
          >
            <Route
              path={`:comments`}
              element={
                <Comments
                  // setMovieData={setMovieData}
                  userData={userData}
                  setUserData={setUserData}
                  isModalOpen={isModalOpen}
                  setModalOpen={setModalOpen}
                  // movieSelect={movieSelect}
                />
              }
            >
              <Route
                path={`comments/:commentid`}
                element={
                  <Comments
                    // setMovieData={setMovieData}
                    userData={userData}
                    setUserData={setUserData}
                    isModalOpen={isModalOpen}
                    setModalOpen={setModalOpen}
                    // movieSelect={movieSelect}
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

//! REMEMBER PROPS
// THESE CAN BE PASSED THROUGH FOR FUNCTIONS ALSO
