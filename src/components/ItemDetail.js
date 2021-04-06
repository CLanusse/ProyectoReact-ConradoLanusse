import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({title, img, detail, precio, category, stock}) => {

    const agregarAlCarrito = (cantidad)=> {console.log(`Agregados ${cantidad} ${title} al carrito`)};
    
    return <div className="itemDetail">
            <h3>{title}</h3>
            <div className="detailContainer">
                <img src={img} alt=""></img>
                <div className="detailInfo">
                    <p>{detail}</p>
                    <div className="detailPrecio">
                        <p>Precio: ${precio}</p>
                        <ItemCount stock={stock} onAdd={agregarAlCarrito} />
                    </div>
                </div>
            </div>
            <Link to={`/category/${category}`}>Volver</Link>
    </div>

}

export default ItemDetail;