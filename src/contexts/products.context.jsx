import { createContext, useEffect, useState } from "react";
// import PRODUCTS from '../shop-data.json';
// import useFirebase from "../hook/useFirebase";


export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState();


    useEffect(() => {
        fetch("https://e-commerce-luglio-2022-default-rtdb.europe-west1.firebasedatabase.app/product.json")
        .then((response) => response.json())
        .then((PRODUCTS) => setProducts(PRODUCTS));
    }, [])

    const value = {products};

    return(
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}