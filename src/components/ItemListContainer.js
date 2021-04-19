import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/client';
import ItemList from './ItemList'
import { Loader } from './Loader';


const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    

    useEffect(()=>{
        setLoading(true)

        const database = getFirestore()
        const itemCollection = database.collection('items')

        if (categoryId === 'todos') {
            itemCollection.get().then( res => {
                const data = res.docs.map(doc => ({id: doc.id, ...doc.data()}))
                setProductos(data)
            }).finally(()=>{
                setLoading(false)
            })
        } else {
            itemCollection.where('category','==', categoryId).get().then( res => {
                const data = res.docs.map(doc => ({id: doc.id, ...doc.data()}))
                setProductos(data)
            }).finally(()=>{
                setLoading(false)
            })
        }
       
    }, [categoryId])

    return <>
           {
            loading ? <Loader/>
            :
            <section className="productos">
                    <h2>{categoryId}</h2>
                    <ItemList items={productos}/>
            </section>
            }
   </>
}
export default ItemListContainer