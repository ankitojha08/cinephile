import React from "react";
import { img_url } from "./constants";
import { Link } from "react-router-dom";
import { useWishList } from "../../utils/wishlistContext";

const ShowCard = (props) => {
  const { list, addItem, removeItem } = useWishList();

  // console.log(props);

  return (
    <div className='w-52 m-10'>
      <div className=''>
        <Link to={`/item/${props.id}`} className=''>
          <img
            src={img_url + props.poster_path}
            alt=''
            className='w-full rounded-md'
          />
        </Link>
        <div className='flex justify-between w-full px-2 py-1'>
          <p className='text-slate-200'>{props.name}</p>
          <button
            className='text-slate-200 bg-zinc-700 hover:bg-zinc-300 rounded-md h-8 w-8'
            onClick={() => {
              // Extract individual properties directly
              addItem({
                name: props.name,
                poster_path: props.poster_path,
                id: props.id,
              });
            }}>
            🐓
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
