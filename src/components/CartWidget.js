import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = ({contador})=> {
    return <button>
            <FontAwesomeIcon icon={faShoppingCart} className="nav__carrito"/>
            <span>{contador}</span>
        </button>

         
}

export default CartWidget;