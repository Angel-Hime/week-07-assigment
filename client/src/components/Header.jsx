import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <header className=" w-screen row-start-1 row-end-2 h-100 grid grid-cols-5 justify-items-center items-center z-50">
        <nav className="h-50 col-start-1 col-end-2">
          <button
            className=" rounded-2xl  hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900"
          >
            <Link to="/">
              <img className="h-50 " src="/icons/watch-movie.png" alt="logo" />
            </Link>
          </button>
        </nav>
        <h2 className="h-10 col-start-3 col-end-4 text-3xl">The Cinema Room</h2>
        <nav className="h-10 col-start-4 col-end-5">
          <button
            className="rounded-2xl bg-[#dcd6d649] hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900"
          >
            <Link to="/">Home</Link>
          </button>
        </nav>
      </header>
    </>
  );
}
