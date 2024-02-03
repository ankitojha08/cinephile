import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowCard from "./NotShowCard";
import SearchBar from "./SearchBar.js";
import Shimmer from "./Shimmer.js";

const QueryPage = () => {
  const searchTxt = useParams().query;
  const [requiredList, setRequiredList] = useState([]);

  const searchQuery = () => {
    // console.log(`search query`);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchTxt +
        "&language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setRequiredList(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // setRequiredList([]);
    searchQuery();
  }, [requiredList]);

  return (
    <div className='bg-zinc-900'>
      <SearchBar />
      <div className='flex flex-wrap  w-10/12 m-auto bg-zinc-900'>
        {requiredList.length === 0 ? (
          <Shimmer />
        ) : (
          requiredList.map((ele) => {
            return (
              <ShowCard
                key={ele.id}
                id={ele.id}
                name={ele.original_title}
                poster_path={ele.poster_path}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default QueryPage;
