import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({title, img, precio, id}) => {


    return <div className="cardComponent">
            <img src={img} alt={title}></img>
            <h3>{title}</h3>
            <p>Precio: ${precio.toFixed(2)}</p>
            <div className="btn-item">
                <Link to={`/item/${id}`}  className="verMas">Ver más</Link>
            </div>
            
    </div>
}

export default Item;