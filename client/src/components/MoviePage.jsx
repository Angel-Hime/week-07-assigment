import { Outlet, useParams, Link } from "react-router";
import Header from "./Header";
import useMovieFetch from "../utils/useMovieFetch";

export default function MoviePage({ movieSelect, setMovieData, movieData }) {
  const { comments } = useParams();

  const splitDate = movieSelect.release_date;
  let releaseDate;

  if (releaseDate) {
    releaseDate = splitDate.split("T");
  }

  useMovieFetch({ setMovieData });
  console.log(movieData);
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="grid grid-cols-3 grid-rows-3 content-center items-center">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 grid grid-cols-2 grid-rows-1 justify-items-center items-center">
          <img
            className="w-150"
            src={movieSelect.poster_url}
            alt={movieSelect.poster_alt}
          />
          <section>
            <h2 className="text-2xl text-shadow-2xs text-shadow-black">
              {movieSelect.film_name}
            </h2>
            <p>Genre: {movieSelect.genre}</p>
            <p>Director: {movieSelect.director}</p>
            <p>Realease Date: {releaseDate}</p>
          </section>
        </div>

        {comments != "comments" ? (
          <nav className="col-start-3 col-end-4">
            <Link to={`comments/#comments`}>
              <button
                className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl     focus:drop-shadow-gray-700 w-max h-max "
              >
                <img
                  className="w-50 p-2 z-100"
                  src="/icons/show-comments.png"
                  alt="show comments"
                />
              </button>
            </Link>
          </nav>
        ) : null}
        {comments === "comments" ? (
          <>
            <nav className="col-start-3 col-end-4">
              <Link to={` `}>
                <button
                  className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl     focus:drop-shadow-gray-700 w-max h-max "
                >
                  <img
                    className="w-50 p-2 z-100"
                    src="/icons/show-comments.png"
                    alt="show comments"
                  />
                </button>
              </Link>
            </nav>
            <Outlet />
          </>
        ) : null}
      </section>

      {/*  */}
    </>
  );
}
