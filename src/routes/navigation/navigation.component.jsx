import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { useContext } from "react";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

import {CartContext} from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {

    const {isCartOpen} = useContext(CartContext);

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
            <Outlet />
        </Fragment>
    )
}

export default Navigation;