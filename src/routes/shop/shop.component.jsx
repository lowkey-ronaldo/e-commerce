import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
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

  return (
    <div className="products-container">

        {products.map((product) => (
            <ProductCard key={product.id} product={product}  />
        ))}
    </div>
  );
};

export default Shop;
