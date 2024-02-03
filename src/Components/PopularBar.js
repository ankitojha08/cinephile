const PopularBar = (props) => {
  const { setPopularState } = props;

  return (
    <div className='flex justify-around text-white h-10 w-4/12 m-auto mt-10'>
      <button
        className='bg-zinc-800  w-28 rounded-full  hover:bg-zinc-600 font-light'
        onClick={() => setPopularState("popular")}>
        Popular
      </button>
      <button
        className='bg-zinc-800  w-28 rounded-full hover:bg-zinc-600 font-light'
        onClick={() => setPopularState("top_rated")}>
        Top Rated
      </button>
      <button
        className='bg-zinc-800  w-28 rounded-full  hover:bg-zinc-600 font-light'
        onClick={() => setPopularState("upcoming")}>
        Upcoming
      </button>
    </div>
  );
};

export default PopularBar;
