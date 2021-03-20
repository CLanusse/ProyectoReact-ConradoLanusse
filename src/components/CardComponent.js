import React from 'react';
import ItemCount from './ItemCount';

const CardComponent = ({titulo, imagen, descripcion, precio, stock}) => {

    const agregarAlCarrito = (cantidad)=> {console.log(`Agregados ${cantidad} ${titulo} al carrito`)};

    return <div className="cardComponent">
            <h3>{titulo}</h3>
            <img src={imagen}></img>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <ItemCount stock={stock} onAdd={agregarAlCarrito} />
    </div>
}

export default CardComponent;