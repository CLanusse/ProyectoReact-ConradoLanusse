import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../firebase/getItem';
import ItemDetail from './ItemDetail';
import { Loader } from './Loader';


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)
        getItem(itemId).then(res => {
            setItem(res)
        }).finally(()=>{
            setLoading(false)
        })
    }, [itemId])

    return <>
             {loading ? <Loader/> : <ItemDetail item={item}/>}
          </>
    
}

export default ItemDetailContainer;