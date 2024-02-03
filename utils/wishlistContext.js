import { createContext, useState, useContext } from "react";

const WishlistContext = createContext(() => ({
  list: [],
  addItem: () => {},
  removeItem: () => {},
}));

export const WishlistProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    setList((prevList) => {
      const existingItemIndex = prevList.findIndex(
        (existingItem) => existingItem.id === item.id
      );

      if (existingItemIndex === -1) {
        // Item doesn't exist, add it to the list
        return [...prevList, item];
      } else {
        // Item already exists, don't add it
        return prevList;
      }
    });
  };

  const removeItem = (id) => {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== id);
    });
  };

  return (
    <WishlistContext.Provider value={{ list, addItem, removeItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishlistContext);
};
