import React from 'react';
import ItemCount from './ItemCount';

const CardComponent = ({titulo, imagen, descripcion, precio, stock}) => {
    return <div className="cardComponent">
            <h3>{titulo}</h3>
            <img src={imagen}></img>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <ItemCount stock={stock}/>
    </div>
}

export default CardComponent;