import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import { Loader } from './Loader'

export const Cart = ()=>{

    const [loading, setLoading] = useState(true)
    const {cart, removeItem, clear, totalCart} = useContext(CartContext)

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
    }, [])
    

    return (
        <div className="cartContainer">
        { loading ? <Loader/> 
             : 
             <>
                {!cart.length ? <div className="emptyCart">
                                    <h2>No hay items en el carrito</h2>
                                    <Link to='/category/catalogo'>Ir al Shop</Link>
                                </div> 
                            :
    
                            <>
                                <h2>Tu compra</h2>
                                {cart.map(itemCart => (
                                    <CartItem key={itemCart.item.id} item={itemCart} remove={removeItem}/>
                                ))}

                                <div className="totalCart">
                                    <p>Total compra: ${totalCart().toFixed(2)}</p>
                                </div>

                                <div className="cartButtons">
                                    <button onClick={()=> clear()}>Vaciar carrito</button>
                                    <Link to={'/checkout'}>Finalizar compra</Link>
                                </div>
                            </>
               }
            </>
        }
        
        
        </div>
    )


}