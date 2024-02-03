import { useEffect, useState } from "react";
import { LIST_POPULAR } from "./constants.js";
import ShowCard from "./NotShowCard.js";
import SearchBar from "./SearchBar.js";
import useWishList from "../../utils/wishlistContext.js";
import PopularBar from "./PopularBar.js";
import StateListGen from "./StateListGen.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const { list } = useWishList();
  const [requiredList, setRequiredList] = useState([]);
  const [popularState, setPopularState] = useState("popular");

  useEffect(() => {
    async function fetchData() {
      const results = await StateListGen(popularState); // Fetch data

      setRequiredList(results);
    }
    setRequiredList([]);
    fetchData();
  }, [popularState]);

  return (
    <div className='bg-zinc-900'>
      {/* Search feature input */}
      <SearchBar />
      <PopularBar setPopularState={setPopularState} />

      {/* Movie Blocks */}

      <div className='flex flex-wrap w-10/12 m-auto'>
        {requiredList.length === 0 ? (
          <Shimmer />
        ) : (
          requiredList.map((ele) => (
            <ShowCard
              key={ele.id}
              id={ele.id}
              name={ele.original_title}
              poster_path={ele.poster_path}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
