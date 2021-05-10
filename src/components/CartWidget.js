import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = ()=> {
    const {cart, totalCart} = useContext(CartContext)

    return <Link to='/cart' className={cart.length > 0 ? 'nav__cart nav__cart--show' : 'nav__cart'}>
            <FontAwesomeIcon icon={faShoppingCart} className="nav__carrito"/>
            <span>{cart.reduce((acc, el) => acc + el.quantity, 0)}</span>
            <p className="cartW-precio">${totalCart().toFixed(2)}</p>
        </Link>

         
}

export default CartWidget;