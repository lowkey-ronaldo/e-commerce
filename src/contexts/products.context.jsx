import { createContext, useState, useEffect } from "react";
// import PRODUCTS from '../shop-data.json';


export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {

    const [fetchProducts, setFetchProducts] = useState([]);
    const [products, setProducts] = useState(fetchProducts);
    const url =
      "https://e-commerce-luglio-2022-default-rtdb.europe-west1.firebasedatabase.app/product.json";
  
    useEffect(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((PRODUCTS) => setFetchProducts(PRODUCTS));
    }, []);
  
    useEffect(() => {
      setProducts(fetchProducts);
    }, [fetchProducts]);


    const value = {products};

    return(
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}