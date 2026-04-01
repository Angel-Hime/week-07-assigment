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
  // const { commentid } = useParams();
  // console.log(commentid);

  //like comment
  function handleLike(comment) {
    // TODO: now we need to send it to the server
    fetch(
      `https://week-07-assigment-server.onrender.com/like-comment/${comment.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      },
    );
  }

  function handleDelete(comment) {
    console.log(comment);
    fetch(
      `https://week-07-assigment-server.onrender.com/delete-comment/${comment.id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      },
    );
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
    <section className="h-max col-start-1 col-end-4 row-start-2 row-span-1 self-start flex flex-col gap-5">
      <h2 className="text-3xl">Comments</h2>

      <section>
        {userData.values &&
          userData.map((comment) => (
            <section className="flex flex-col gap-3">
              {movie_id == comment.movie_id ? (
                <div
                  key={comment.id}
                  className="flex flex-row items-center justify-evenly"
                >
                  {" "}
                  <p className="underline">User Name:</p>
                  <p className="bg-gray-400 h-10 min-w-50 rounded-sm content-center">
                    {" "}
                    {comment.user_name}
                  </p>
                  <p className="underline">User Rating:</p>
                  <p className="bg-gray-400 h-10 rounded-sm w-10  content-center">
                    {" "}
                    {comment.rating}
                  </p>
                  <p className="underline">User Comment: </p>
                  <p className="bg-gray-400 min-h-10 rounded-sm max-h-100 min-w-150 content-center text-wrap">
                    {comment.comment}
                  </p>
                  <section className="self-center flex flex-row gap-10 items-center">
                    {" "}
                    <p className="h-20 w-20 content-center">
                      {comment.comment_likes} Likes
                    </p>
                    <section className="flex gap-6">
                      <button
                        className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#f36dc669]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl focus:drop-shadow-gray-700"
                        onClick={() => handleLike(comment)}
                      >
                        <img
                          className="w-10  z-100"
                          src="/icons/favourite.png"
                          alt="show comments"
                        />
                      </button>

                      <button
                        className=" bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#f30606b0] 
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl     focus:drop-shadow-gray-700  h-fit "
                        onClick={() => handleDelete(comment)}
                      >
                        <img
                          className="w-10  z-100"
                          src="/icons/delete.png"
                          alt="show comments"
                        />
                      </button>
                    </section>
                  </section>
                </div>
              ) : null}
            </section>
          ))}
      </section>

      {!isModalOpen ? (
        <button
          className="w-max self-center bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-gray-900 hover:bg-[#6ad9b669]
          focus:outline-2 focus:outline-offset-2 focus:outline-gray-700 focus:drop-shadow-2xl     focus:drop-shadow-gray-700  "
        >
          <img
            className="w-30 z-100"
            src="/icons/write-comment.png"
            alt="show comments"
            onClick={() => handleAddComment()}
          />
        </button>
      ) : isModalOpen ? (
        <NewCommentModal setModalOpen={setModalOpen} />
      ) : null}

      {/*  */}
    </section>
  );
}
