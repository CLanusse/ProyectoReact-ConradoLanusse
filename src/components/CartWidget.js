import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = ()=> {
    const {cart} = useContext(CartContext)

    return <Link to='/cart' className={!cart.length && 'nav__cart--hidden'}>
            <FontAwesomeIcon icon={faShoppingCart} className="nav__carrito"/>
            <span>{cart.reduce((acc, el) => acc += el.quantity, 0)}</span>
        </Link>

         
}

export default CartWidget;