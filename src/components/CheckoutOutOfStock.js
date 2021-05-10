import React from 'react'
import { Link } from 'react-router-dom'

export const CheckoutOutOfStock = ({noStock}) => {
    return (
        <div className="outofstock">
            <h3>La orden no se pudo procesar</h3>
            <p>No hay suficiente stock de los siguientes productos:</p>
            <hr/>
            {noStock.map(item => 
                <div key={item.id} className="outofstock__item">
                    <img src={item.img} alt={item.title}/>
                    <p>{item.title}</p>
                    <p>Cantidad disponible: {item.stock}</p>
                </div>)}
            <hr/>
            <p>Por favor, regrese al carrito y actualice su compra</p>
            <Link to='/cart'>Volver al carrito</Link>
        </div>
    )
}
