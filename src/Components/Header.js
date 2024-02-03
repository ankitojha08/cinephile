import useWishlist from "../../utils/wishlistContext";
import { Link } from "react-router-dom";
const Header = () => {
  const { list, addItem, removeItem } = useWishlist();

  return (
    <div className='flex bg-zinc-900 h-24 border-b-[2px] border-zinc-400'>
      <div className='flex self-center w-11/12 m-auto justify-between'>
        {/* Logo */}
        <h1 className='font-sans  text-slate-50 text-xl cursor-pointer font-black'>
          Cine<span className='text-green-500'>Phile</span>
        </h1>

        {/* Menu Items */}
        <div className='text-white italic font-thin text-sm '>
          <Link
            to='/'
            className='px-6 text-green-500 hover:bg-zinc-800 py-3 hover:rounded-md'>
            HOME
          </Link>
          <Link
            to='/cart'
            className='px-6 hover:bg-zinc-800 py-3 hover:rounded-md'>
            WISHLIST{list.length !== 0 && `(${list.length})`}
          </Link>

          <Link to='' className='px-6 hover:bg-zinc-800 py-3 hover:rounded-md'>
            ABOUT US
          </Link>
          {/* <Link
            to=''
            className='px-6 text-red-500  hover:bg-zinc-800 py-3 hover:rounded-md'>
            LOG OUT
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
