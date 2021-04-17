import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import getStock from '../stock/stock';
import ItemDetail from './ItemDetail';
import { Loader } from './Loader';


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const {itemId} = useParams()


    useEffect(()=>{
        getStock().then(res => setItem(res.find(prod => prod.id === parseInt(itemId))))
    }, [itemId])

    return <>
             {item === null ? <Loader/> : <ItemDetail item={item}/>}
          </>
    
}

export default ItemDetailContainer;