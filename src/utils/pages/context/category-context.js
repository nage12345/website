import axios from "axios";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategory(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
