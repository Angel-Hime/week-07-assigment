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
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  return (
    <>
      <>
        <h2>Movies</h2>
        {/* we are going to do a filter but MAKE SURE FIRST LETTER OF GENRE IS CATEGORISED! */}
        {/* we need to use params */}
        <nav>
          {" "}
          <Link to={`/genre/${"Sci-Fi"}`}>Sci-Fi</Link>
          <Link to={`/genre/${"Horror"}`}>Horror</Link>
          <Link to={`/genre/${"Drama"}`}>Drama</Link>{" "}
        </nav>

        {/* we need to have a select with options that will change the param --> use onChange with the select */}
        <div className="flex flex-row items-center gap-10 flex-wrap justify-center">
          {" "}
          {movieData.values &&
            movieData.map((movie) => (
              <Link
                to={`/movieselection/${movie.id}`}
                onClick={() => handleMovieSelect(movie)}
              >
                <img
                  key={movie.id}
                  className="w-150"
                  src={movie.poster_url}
                  alt={movie.poster_alt}
                />
              </Link>
            ))}{" "}
        </div>
      </>
    </>
  );
}
