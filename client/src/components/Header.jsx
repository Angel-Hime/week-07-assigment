import { Link } from "react-router";

export default function Header(setModalOpen) {
  return (
    <section className="w-screen h-60 grid grid-cols-5">
      <button
        className="self-center justify-self-center h-50 col-start-1 col-end-2 rounded-2xl hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900"
      >
        <Link to="/">
          <img className="h-50 " src="/icons/watch-movie.png" alt="logo" />
        </Link>
      </button>

      <h2 className="self-center justify-self-center  h-10 col-start-3 col-end-4 text-5xl">
        The Cinema Room
      </h2>

      <Link
        className="self-center justify-self-center col-start-5 col-end-6 p-2 h-10 w-20 rounded-2xl bg-[#dcd6d649] hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-gray-900 
              focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:shadow-2xl     focus:shadow-gray-900"
        to="/"
      >
        <button
          onClick={() => setModalOpen(false)}
          className="cursor-pointer h-10 w-20"
        >
          Home
        </button>
      </Link>
    </section>
  );
}
