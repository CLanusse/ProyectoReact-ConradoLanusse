import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Cart = ()=>{

    const {cart, removeItem, clear, addItem} = useContext(CartContext)

    return (
        
        <div className="cartContainer">

        {
            !cart.length ? <div className="emptyCart">
                                <h2>No hay items en el carrito</h2>
                                <Link to='/category/todos'>Ir al Shop</Link>
                            </div> 
                        :

                        <>
                            <h2>Tu compra</h2>
                            {cart.map(itemCart => (
                                <div className="cartItem" key={itemCart.item.id}>
                                    <div className="cartItemInfo">
                                        <img src={itemCart.item.img}/>
                                        <div>
                                            <p className="cartItemTitle">{itemCart.item.title}</p>
                                            <p className="cartItemQuantity">Cantidad: {itemCart.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="cartItemPrice">Precio: ${itemCart.item.precio * itemCart.quantity}</p>
                                    <button onClick={()=> removeItem(itemCart.item.id)}><FontAwesomeIcon icon={faTrash} className="cartItemDelete"></FontAwesomeIcon></button>
                                </div>
                            ))}

                            <div className="totalCart">
                                <p>Total compra: ${cart.reduce((acc, itemCart) => (acc += (itemCart.quantity * itemCart.item.precio)),0)}</p>
                            </div>

                            <div className="cartButtons">
                                <button onClick={()=> clear()}>Vaciar carrito</button>
                                <button>Finalizar compra</button>
                            </div>
                        </>
                        
        }
        
        </div>
    )


}