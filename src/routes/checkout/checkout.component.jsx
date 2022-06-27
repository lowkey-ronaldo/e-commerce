import './checkout.styles.scss';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item-component';

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container' >
            <div className='checkout-header' >
                <div className='header-block' >
                    <span>Prodotti</span>
                </div>
                <div className='header-block' >
                    <span>Descrizione</span>
                </div>
                <div className='header-block' >
                    <span>Quantità</span>
                </div>
                <div className='header-block' >
                    <span>Prezzo</span>
                </div>
                <div className='header-block' >
                    <span>Rimuovi</span>
                </div>

            </div>
                {cartItems.map((cartItem) => (
                       <CheckoutItem key={cartItem.id} cartItem={cartItem}  />
                ))}
            <span className='total' >${cartTotal}</span>
        </div>
    )
}

export default Checkout;