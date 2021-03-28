import React from 'react';

const ItemDetail = ({item = {}}) => {


    
    return <div className="itemDetail">
            <h3>{item?.title}</h3>
            <img src={item?.img} alt=""></img>
            <p>{item?.detail}</p>
            <p>{item?.precio}</p>
    </div>

}

export default ItemDetail;