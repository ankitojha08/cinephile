import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTxt, setSearchTxt] = useState("");
  return (
    <div className='flex h-16 content-center justify-center'>
      <input
        className='h-9 self-center bg-zinc-700 placeholder:text-zinc-400 placeholder:font-thin text-slate-400 font-thin w-64 px-3 mx-1 rounded-md '
        type='text'
        value={searchTxt}
        placeholder='Search Movie'
        onChange={(e) => {
          setSearchTxt(e.target.value);
        }}
      />

      <button className='h-9 self-center text-slate-200 font-thin px-3 bg-zinc-700 rounded-md mx-1'>
        {searchTxt.trim() === "" ? (
          <span>Search</span>
        ) : (
          <Link to={"/query/" + searchTxt}>Search</Link>
        )}
      </button>
    </div>
  );
};

export default SearchBar;
