import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <div className="h-20 grid grid-cols-5 justify-items-center items-center ">
        <img
          className="h-10 col-start-1 col-end-2"
          src="/icons/watch-movie.png"
          alt="logo"
        />
        <nav className="h-10 col-start-3 col-end-4">
          <Link to="/">Home</Link> | <Link to="/movies">Movies</Link>
        </nav>
      </div>
    </>
  );
}
