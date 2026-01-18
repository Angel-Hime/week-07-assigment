import { Routes, Route, BrowserRouter } from "react-router";
// css
import "./App.css";
// components

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

  return (
    <>
      <BrowserRouter>
        <body className="grid grid-cols-1 grid-rows-2 justify-items-center overflow-x-hidden">
          <header>
            <Header />
          </header>
          <main className="row-start-2 row-end-3 grid grid-cols-1">
            {/*routing system*/}
            <Routes>
              {/* lost route */}
              <Route path="*" element={<NotFoundPage />} />
              {/* home route */}
              <Route
                path={"/"}
                element={
                  <Movies
                    movieData={movieData}
                    setMovieData={setMovieData}
                    movieSelect={movieSelect}
                    setMovieSelect={setMovieSelect}
                  />
                }
              />

              {/* actual pages */}
              <Route
                path={"movies"}
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
                path={"genre/:genre"}
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
                path={"movieselection/:movie_id"}
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
            </Routes>{" "}
          </main>
        </body>
      </BrowserRouter>
    </>
  );
}

//! REMEMBER PROPS
// THESE CAN BE PASSED THROUGH FOR FUNCTIONS ALSO
