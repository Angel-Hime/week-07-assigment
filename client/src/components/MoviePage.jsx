import { Outlet, useParams, Link } from "react-router";

export default function MoviePage({ movieSelect }) {
  const { id, comments } = useParams();
  console.log(comments);
  // console.log(`Movie Select id: ${id}`);
  // console.log(`Movie Select movie:${movieSelect.film_name}`);
  const splitDate = movieSelect.release_date;
  const [releaseDate] = splitDate.split("T");
  return (
    <>
      <h2>Movie</h2>

      <section className="grid grid-cols-3 grid-rows-3 content-center items-center">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 grid grid-cols-2 grid-rows-1 justify-items-center items-center">
          <img className="w-50" src={movieSelect.poster_url} alt="." />
          <section>
            <h2>{movieSelect.film_name}</h2>
            <p>{movieSelect.genre}</p>
            <p>{movieSelect.director}</p>
            <p>{releaseDate}</p>
          </section>
        </div>

        {comments != "comments" ? (
          <nav className="col-start-3 col-end-4">
            <Link to={`comments`}>
              <button
                className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-violet-500 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 focus:drop-shadow-2xl     focus:drop-shadow-violet-500 w-max h-max"
              >
                <img
                  className="w-20 p-2 z-100"
                  src="/icons/show-comments.png"
                  alt="show comments"
                />
              </button>
            </Link>
          </nav>
        ) : null}
        {comments == "comments" ? (
          <>
            <nav className="col-start-3 col-end-4">
              <Link to={` `}>
                <button
                  className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-violet-500 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 focus:drop-shadow-2xl     focus:drop-shadow-violet-500 w-max h-max"
                >
                  <img
                    className="w-20 p-2 z-100"
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
