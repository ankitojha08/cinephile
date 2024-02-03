import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useWishList } from "../../utils/wishlistContext";

const DetailPage = () => {
  const { id } = useParams();
  const [responseConsole, setResponseConsole] = useState("initial response");
  const { list, addItem, removeItem } = useWishList();

  const getDetails = () => {
    // console.log("get details");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWQwNzBiMGQ5ZmU4ZjUwZmU4MzU1MTA0MTUxODdjYiIsInN1YiI6IjY1YjYwN2Y1NThlZmQzMDE0OGNhYTk5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QncpQr9uu2ZUriw7e1rVNqhVUDh9-jPs_UPrGU3E9A",
      },
    };

    fetch("https://api.themoviedb.org/3/movie/" + id, options)
      .then((response) => response.json())
      .then((response) => {
        // console.log(responseConsole);
        setResponseConsole(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDetails();
  }, []);

  return responseConsole === "initial response" ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div className='text-white m-auto w-8/12 flex justify-around p-10'>
        <img
          className='h-96'
          src={`https://image.tmdb.org/t/p/w500/${responseConsole.poster_path}`}
          alt=''
        />
        <div className='w-7/12 '>
          {/* title ------------------------------------------------------- */}
          <div className='flex justify-between'>
            <h2 className='text-7xl font-bold inline-block'>
              {responseConsole.original_title}
            </h2>
            <span className='w-28'>
              ⭐ {responseConsole.vote_average.toFixed(1)}
            </span>
          </div>

          <p className='italic p-2 text-sm font-extralight'>
            {responseConsole.tagline}
          </p>
          <p className='italic p-2 text-sm'>{responseConsole.overview}</p>

          {/* Genres  -------------------------------------------------------  */}
          <ul className='flex mt-5'>
            {responseConsole.genres.map((ele) => {
              return (
                <li className='bg-slate-800 px-4 py-2 m-1 rounded-2xl text-sm'>
                  {ele.name}
                </li>
              );
            })}
          </ul>

          {/* Add to Wishlist Button  -------------------------------------------------------  */}
          <button
            className='bg-yellow-300 text-black font-medium w-80 p-2 rounded-md mt-8'
            onClick={() => {
              addItem({
                name: responseConsole.original_title,
                poster_path: responseConsole.poster_path,
                id: responseConsole.id,
              });
              // console.log(list);
            }}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
