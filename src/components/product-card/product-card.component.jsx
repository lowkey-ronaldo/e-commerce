import './product-card.styles.scss';
import "../button/button.styles.scss";
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

// Componente utilizzato nella pagina Shop e derivati: serve per aggiungere prodotti al carrello.

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className='product-card-container' >
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer' >
                <span className='name' >{name}</span>
                <span className='price' >{price}</span>
            </div>

            <button
                className="button-container inverted"
                onClick={addProductToCart} >
                Add to cart
            </button>
        </div>
    )
}

export default ProductCard;