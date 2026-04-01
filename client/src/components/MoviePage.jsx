import { Outlet, useParams, Link } from "react-router";
import Header from "./Header";
import useMovieFetch from "../utils/useMovieFetch";

export default function MoviePage({ setMovieData, movieData, setModalOpen }) {
  const { comments } = useParams();

  useMovieFetch({ setMovieData });
  // console.log(movieData);
  const splitDate = movieData[0]?.release_date;
  let releaseDate;

  if (splitDate) {
    releaseDate = splitDate.split("T")[0];
  }

  return (
    <main className="w-screen overflow-x-hidden flex flex-col gap-20 h-max">
      <header>
        <Header setModalOpen={setModalOpen} />
      </header>
      <section className="grid grid-cols-3 grid-rows-2 content-center items-center">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 grid grid-cols-2 grid-rows-1 justify-items-center items-center">
          <img
            className="w-150 h-200"
            src={movieData[0]?.poster_url}
            alt={movieData[0]?.poster_alt}
          />
          <section className="flex flex-col h-100 w-full items-center gap-10">
            <h2 className="text-4xl underline text-shadow-2xs text-shadow-black">
              {movieData[0]?.film_name}
            </h2>
            <section className="flex flex-col gap-6">
              <div className="flex flex-row gap-2 items-center justify-between">
                <p className="  text-2xl ">Genre: </p>
                <p className="bg-gray-400 h-10 w-100 rounded-sm text-3xl">
                  {movieData[0]?.genre}
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center justify-between">
                <p className=" text-2xl ">Director: </p>
                <p className="bg-gray-400 h-10 w-100 rounded-sm text-3xl ">
                  {movieData[0]?.director}
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center justify-between">
                <p className="  text-2xl ">Realease Date: </p>
                <p className="bg-gray-400 h-10 w-100 rounded-sm text-3xl">
                  {releaseDate}
                </p>
              </div>
            </section>
          </section>
        </div>

        {comments !== "comments" ? (
          <nav className="col-start-3 col-end-4 row-start-1 row-end-2">
            <Link
              onClick={() => window.scrollTo(0, 1000)}
              to={{ pathname: "comments" }}
            >
              <button
                className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#6ad9b669]
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
        ) : comments === "comments" ? (
          <>
            <nav className="col-start-3 col-end-4 row-start-1 row-end-2 self-end">
              <Link
                onClick={() => window.scrollTo(0, 100)}
                to={{ pathname: "" }}
              >
                <button
                  className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#e5535369]
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
            <div className="w-screen">
              <Outlet />
            </div>
          </>
        ) : null}
      </section>
    </main>
  );
}
