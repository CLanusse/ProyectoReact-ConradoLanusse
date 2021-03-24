import React from 'react';
import ItemCount from './ItemCount';

const Item = ({id, titulo, imagen, descripcion, precio, stock}) => {

    const agregarAlCarrito = (cantidad)=> {console.log(`Agregados ${cantidad} ${titulo} al carrito`)};

    return <div key={id} className="cardComponent">
            <h3>{titulo}</h3>
            <img src={imagen}></img>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <ItemCount stock={stock} onAdd={agregarAlCarrito} />
    </div>
}

export default Item;