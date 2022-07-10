import { Fragment, useContext, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.css";

import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UsersContext } from "../../contexts/users.context";

const Navigation = () => {

  const { isCartOpen, setCartCount, setCartItems } = useContext(CartContext);

  const { isLogged, setIsLogged } = useContext(UsersContext);
  const { loggedUser, setLoggedUser } = useContext(UsersContext);

  const navigate = useNavigate();

  const onLogoutHandler = (e) => {
    e.preventDefault();
    setCartCount(0);
    setCartItems([]);
    setIsLogged(false);
    localStorage.removeItem("isLogged");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("id");
    navigate("/login");
  };

  useEffect(() => {
    setLoggedUser(localStorage.getItem("loggedUser"))
  }, [])


  return (
    <Fragment>
      <div className="navigation">
        {isLogged && (
          <>
            <Link className="logo-container" to="/">
              <CrwnLogo className="logo" />
            </Link>
            <div className="loggedUser">{loggedUser}</div>

            <div className="nav-links-container">
              <Link className="nav-link" to="/shop">
                SHOP
              </Link>
              <Link className="nav-link" to="/login" onClick={onLogoutHandler}>
                LOGOUT
              </Link>
              <CartIcon />
            </div>
          </>
        )}

        {isCartOpen && <CartDropdown />}
      </div>

      {/* An Outlet should be used in parent route elements to render their child route elements.
            This allows nested UI to show up when child routes are rendered. 
            If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
