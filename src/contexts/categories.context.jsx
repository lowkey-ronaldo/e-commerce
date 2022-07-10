import { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext({
    categoriesMap: [],
});

export const CategoriesProvider = ({children}) => {

  // In categoriesMap ho un ogetto con array di oggetti come valori
    const [fetchProducts, setFetchProducts] = useState({});
    const [categoriesMap, setCategories] = useState(fetchProducts);
    
    const urlCategories =
      "https://e-commerce-titoli-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  
    useEffect(() => {
      fetch(urlCategories)
        .then((resp) => resp.json())
        .then((PRODUCTS) => setFetchProducts(PRODUCTS));
    }, []);
  
    useEffect(() => {
      setCategories(fetchProducts);
    }, [fetchProducts]);


    const value = {categoriesMap};

    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}