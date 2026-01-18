import { useParams } from "react-router";
import useFetchUsers from "../utils/useFetchUsers";
import NewCommentModal from "./NewCommentModal";

// TODO: render data from database

export default function Comments({
  userData,
  setUserData,
  setModalOpen,
  isModalOpen,
}) {
  const { movie_id } = useParams();
  //

  // get comments data
  useFetchUsers({ setUserData });
  // test data
  // console.log({ userData });

  // get comment id for test
  const { commentid } = useParams();
  console.log(commentid);

  //like comment
  function handleLike(comment) {
    // TODO: now we need to send it to the server
    fetch(`http://localhost:8080/like-comment/${commentid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
  }

  function handleDelete(comment) {
    fetch(`http://localhost:8080/delete-comment/${commentid}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
  }

  function handleAddComment() {
    if (isModalOpen) {
      setModalOpen(false);
    } else if (!isModalOpen) {
      setModalOpen(true);
    }
    // console.log(isModalOpen);
  }

  return (
    <section className="col-start-1 col-end-4 row-start-2 row-span-2 grid-cols-4 grid-rows-1 self-start">
      <h2 className="text-3xl">Comments</h2>

      {userData.values &&
        userData.map((comment) => (
          <>
            {movie_id == comment.movie_id ? (
              <div
                key={comment.id}
                className="flex flex-row items-center justify-evenly"
              >
                {" "}
                <p className="underline">User Name:</p>
                <p> {comment.user_name}</p>
                <p className="underline">User Rating:</p>
                <p> {comment.rating}</p>
                <p className="underline">User Comment: </p>
                <p>"{comment.comment}"</p>
                <section className="flex flex-row gap-10">
                  {" "}
                  <section>
                    <p>{comment.comment_likes} Likes</p>

                    <button
                      className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl  focus:drop-shadow-gray-700   "
                      onClick={() => handleLike(comment)}
                    >
                      <img
                        className="w-20  z-100"
                        src="/icons/favourite.png"
                        alt="show comments"
                      />
                    </button>

                    <button
                      className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl     focus:drop-shadow-gray-700  h-fit "
                      onClick={() => handleDelete(comment)}
                    >
                      <img
                        className="w-20  z-100"
                        src="/icons/delete.png"
                        alt="show comments"
                      />
                    </button>
                  </section>
                </section>
              </div>
            ) : null}
          </>
        ))}

      <button
        className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl     focus:drop-shadow-gray-700  "
      >
        <img
          className="w-30 z-100"
          src="/icons/write-comment.png"
          alt="show comments"
          onClick={() => handleAddComment()}
        />
      </button>
      {isModalOpen ? <NewCommentModal setModalOpen={setModalOpen} /> : null}

      {/*  */}
    </section>
  );
}
