import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

import {CartContext} from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {

    const {isCartOpen} = useContext(CartContext);

    // isCartOpen viene modificato in CartIcon, il suo valore è salvato nello store.

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/' >
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container' >
                    <Link className='nav-link' to='/shop' >
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in' >
                        SIGN IN
                    </Link>
                    <CartIcon/>
                </div>
                { isCartOpen && <CartDropdown/>}
            </div>
            {/* An Outlet should be used in parent route elements to render their child route elements.
            This allows nested UI to show up when child routes are rendered. 
            If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */}
            <Outlet />
        </Fragment>
    )
}

export default Navigation;