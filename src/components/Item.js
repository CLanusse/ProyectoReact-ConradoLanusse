import React from 'react';
import ItemCount from './ItemCount';

const Item = ({title, img, description, precio, stock}) => {

    const agregarAlCarrito = (cantidad)=> {console.log(`Agregados ${cantidad} ${title} al carrito`)};

    return <div className="cardComponent">
            <h3>{title}</h3>
            <img src={img} alt=""></img>
            <p>{description}</p>
            <p>{precio}</p>
            <ItemCount stock={stock} onAdd={agregarAlCarrito} />
    </div>
}

export default Item;