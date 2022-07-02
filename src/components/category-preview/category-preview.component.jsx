import ProductCard from "../product-card/product-card.component";

// Component usato per mostrare solo 4 prodotti per categoria in Shop

const CategoryPreview = ({title, products}) => {
    return(
        <div className="category-preview-container" >
            <h2>
                <span className="title" >{title.toUpperCase()}</span>
            </h2>
            <div>
            {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default CategoryPreview;