import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../firebase/getProducts';
import ItemList from './ItemList'
import { Loader } from './Loader';


const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)
        getProducts(categoryId).then(res => {
            setProductos(res)
        }).finally(()=>{
            setLoading(false)
        })
       
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