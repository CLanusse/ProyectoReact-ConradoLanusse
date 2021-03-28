import React from 'react';
import ItemCount from './ItemCount';

const Item = ({item}) => {

    const agregarAlCarrito = (cantidad)=> {console.log(`Agregados ${cantidad} ${item.title} al carrito`)};

    return <div key={item.id} className="cardComponent">
            <h3>{item.title}</h3>
            <img src={item.img} alt=""></img>
            <p>{item.description}</p>
            <p>{item.precio}</p>
            <ItemCount stock={item.stock} onAdd={agregarAlCarrito} />
    </div>
}

export default Item;