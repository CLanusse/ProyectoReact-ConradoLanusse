import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({title, img, detail, precio, category}) => {


    
    return <div className="itemDetail">
            <h3>{title}</h3>
            <img src={img} alt=""></img>
            <p>{detail}</p>
            <p>{precio}</p>

            <Link to={`/category/${category}`}>Volver</Link>
    </div>

}

export default ItemDetail;