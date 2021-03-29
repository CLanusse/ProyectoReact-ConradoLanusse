import React from 'react';

const ItemDetail = ({title, img, detail, precio}) => {


    
    return <div className="itemDetail">
            <h3>{title}</h3>
            <img src={img} alt=""></img>
            <p>{detail}</p>
            <p>{precio}</p>
    </div>

}

export default ItemDetail;