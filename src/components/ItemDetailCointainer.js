import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/client';
import ItemDetail from './ItemDetail';
import { Loader } from './Loader';


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)
        const database = getFirestore()
        const itemCollection = database.collection('items')
        const item = itemCollection.doc(itemId)
        item.get().then( doc => {
            setItem({id: doc.id, ...doc.data()})
        }).finally(()=>{
            setLoading(false)
        })
    }, [itemId])

    return <>
             {loading ? <Loader/> : <ItemDetail item={item}/>}
          </>
    
}

export default ItemDetailContainer;