import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext';

const CartWidget = ()=> {

    const {cart} = useContext(CartContext)

    return <button>
            <FontAwesomeIcon icon={faShoppingCart} className="nav__carrito"/>
            <span>{cart.length}</span>
        </button>

         
}

export default CartWidget;