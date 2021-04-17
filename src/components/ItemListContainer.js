import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import getStock from '../stock/stock';
import ItemList from './ItemList'
import { Loader } from './Loader';


const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([])

    const {categoryId} = useParams()
    

    useEffect(()=>{
        setProductos([])
        getStock().then(res => {
            if (categoryId === 'todos') {
                setProductos(res)
            } else {
                setProductos(res.filter(prods => prods.category === categoryId))
            }
        })
    }, [categoryId])

    return <>
           {
            !productos.length ? <Loader/>
            :
            <section className="productos">
                    <h2>{categoryId}</h2>
                    <ItemList items={productos}/>
            </section>
            }
   </>
}
export default ItemListContainer