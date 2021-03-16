import React from 'react';

const CardComponent = ({titulo, imagen, descripcion, precio}) => {
    return <div className="cardComponent">
            <h3>{titulo}</h3>
            <img src={imagen}></img>
            <p>{descripcion}</p>
            <p>{precio}</p>
    </div>
}

export default CardComponent;