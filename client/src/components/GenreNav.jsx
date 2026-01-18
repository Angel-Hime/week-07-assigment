import { Link } from "react-router";

export default function GenreNav() {
  //
  return (
    <>
      <nav className="justify-self-center justify-center flex flex-row gap-2">
        {" "}
        <button
          className="rounded-2xl bg-[#dcd6d649] hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900 "
        >
          <Link to={`/genre/${"Sci-Fi"}`}>Sci-Fi</Link>
        </button>
        <button
          className="rounded-2xl bg-[#dcd6d649] hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900 "
        >
          <Link to={`/genre/${"Horror"}`}>Horror</Link>
        </button>
        <button
          className="rounded-2xl bg-[#dcd6d649] hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900 "
        >
          <Link to={`/genre/${"Drama"}`}>Drama</Link>
        </button>{" "}
      </nav>
    </>
  );
}
