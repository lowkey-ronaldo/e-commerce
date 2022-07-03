import "./cart-dropdown.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  // Navigate ha la stessa funzione di Link
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message" > Carrello vuoto </span>
        )}
      </div>
      <button onClick={goToCheckoutHandler}>RIEPILOGO</button>
    </div>
  );
};

export default CartDropdown;
