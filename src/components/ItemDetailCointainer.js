import React, {useState, useEffect }from 'react';
import getStock from '../stock/stock';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    useEffect(()=>{
        getStock().then(res => setItem(res.find(prod => prod.id === 3)))
    }, [])

    return <ItemDetail item={item}/>
}

export default ItemDetailContainer;