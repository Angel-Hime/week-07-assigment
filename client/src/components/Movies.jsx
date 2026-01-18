import { Link, Outlet, useParams, useSearchParams } from "react-router";
import useFetchMovies from "../utils/useFetchMovies";
import SortingComponent from "./SortingComponent";

export default function Movies({
  setMovieData,
  movieData,
  movieSelect,
  setMovieSelect,
  // setIsModalOpen,
  // isModalOpen,
}) {
  const { id } = useParams();
  // console.log(`Movies id: ${id}`);

  useFetchMovies({ setMovieData });

  function handleMovieSelect(movie) {
    setMovieSelect(movie);
    // console.log(`Movies movie:${movieSelect.film_name}`);
    // setIsModalOpen(true);
  }

  return (
    <>
      <>
        <h2>Movies</h2>
        {/* we are going to do a filter but MAKE SURE FIRST LETTER OF GENRE IS CATEGORISED! */}
        {/* we need to use params */}
        <SortingComponent movieData={movieData} />
        {/* we need to have a select with options that will change the param --> use onChange with the select */}
        <div className="flex flex-row items-center gap-10 flex-wrap justify-center">
          {" "}
          {movieData.values &&
            movieData.map((movie) => (
              <Link to={`${movie.id}`} onClick={() => handleMovieSelect(movie)}>
                <img
                  key={movie.id}
                  className="w-60"
                  src={movie.poster_url}
                  alt="."
                />
              </Link>
            ))}{" "}
        </div>
      </>
    </>
  );
}
