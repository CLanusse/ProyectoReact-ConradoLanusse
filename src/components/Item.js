import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({title, img, precio, stock, id}) => {

    const agregarAlCarrito = (cantidad)=> {console.log(`Agregados ${cantidad} ${title} al carrito`)};

    return <div className="cardComponent">
            <h3>{title}</h3>
            <img src={img} alt=""></img>
            <p>{precio}</p>
            <Link to={`/item/${id}`}>Ver más</Link>
            <ItemCount stock={stock} onAdd={agregarAlCarrito} />
    </div>
}

export default Item;