import { Link } from "react-router";

export default function GenreNav() {
  //
  return (
    <>
      <nav className="justify-self-center justify-center flex flex-row gap-2">
        {" "}
        <Link
          className="rounded-2xl bg-[#dcd6d649] hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900 "
          to={`/genre/${"Sci-Fi"}`}
        >
          <button className="cursor-pointer">Sci-Fi </button>
        </Link>
        <Link
          className="rounded-2xl bg-[#dcd6d649] hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900 "
          to={`/genre/${"Horror"}`}
        >
          <button className="cursor-pointer">Horror </button>
        </Link>
        <Link
          className="rounded-2xl bg-[#dcd6d649] hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900 "
          to={`/genre/${"Drama"}`}
        >
          <button className="cursor-pointer">Drama</button>
        </Link>{" "}
      </nav>
    </>
  );
}
