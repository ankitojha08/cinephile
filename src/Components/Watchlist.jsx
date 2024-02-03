import React from "react";
import { useWishList } from "../../utils/wishlistContext";
import { Link } from "react-router-dom";
import { img_url } from "./constants";

const Watchlist = () => {
  const { list, removeItem } = useWishList();

  // console.log(list);
  return (
    <>
      {list.length === 0 && (
        <div className='flex h-3/6 self-center align-middle'>
          <h1 className='text-white text-4xl font-semibold p-10'>
            No items added 😓😥
          </h1>
        </div>
      )}

      <div className='flex flex-wrap m-auto  '>
        {list.map((ele) => {
          return (
            <div className='w-52 m-10'>
              <div className=''>
                <Link to={`/item/${ele.id}`} className=''>
                  <img
                    src={img_url + ele.poster_path}
                    alt=''
                    className='w-full rounded-md'
                  />
                </Link>
                <div className='flex justify-between w-full px-2 py-1'>
                  <p className='text-slate-200'>{ele.name}</p>
                  <button
                    className='text-slate-200 bg-zinc-700 hover:bg-zinc-300 rounded-md h-8 w-8'
                    onClick={() => {
                      removeItem(ele.id);
                    }}>
                    🐦
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Watchlist;
