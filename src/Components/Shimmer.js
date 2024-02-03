import React from "react";

const Shimmer = () => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <div className='w-56 h-80 bg-zinc-300 m-10 rounded-md' key={i} />
      ))}
    </>
  );
};

export default Shimmer;
