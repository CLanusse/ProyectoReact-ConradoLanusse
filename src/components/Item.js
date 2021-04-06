import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({title, img, precio, id}) => {


    return <div className="cardComponent">
            <h3>{title}</h3>
            <img src={img} alt=""></img>
            <p>Precio: ${precio}</p>
            <Link to={`/item/${id}`}  className="verMas">Ver más</Link>
            
    </div>
}

export default Item;