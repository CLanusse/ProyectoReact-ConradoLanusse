import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CheckoutDetail = ({buyer, setValid, handleOrder, total}) => {

    const {cart} = useContext(CartContext)

    return (
        <div className="finalizar-compra">
                    <div>
                        <h4>Datos del comprador</h4>
                        <ul>
                            <li key="name">Nombre: {buyer.name}</li>
                            <li key="tel">Teléfono: {buyer.tel}</li>
                            <li key="email">Email: {buyer.email}</li>
                        </ul>
                        <hr/>
                        <h4>Detalle de compra</h4>
                        <ul>
                            {cart.map(item => <li key={item.item.id}>{item.item.title} x {item.quantity}</li>)}
                        </ul>
                        <hr/>
                        <p>Total a pagar: <span>${total().toFixed(2)}</span></p>
                    </div>
                    
                    <div className="dataButtons">
                        <button onClick={()=> setValid(false)}>Modificar datos</button>
                        <button onClick={handleOrder}>Confirmar compra</button>
                    </div>
                </div>
    )
}
