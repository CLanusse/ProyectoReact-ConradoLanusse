import React, {useState, useEffect }from 'react';
import { useParams } from 'react-router-dom';
import getStock from '../stock/stock';
import ItemList from './ItemList'


const ItemListContainer = ({greeting})=>{
    const [productos, setProductos] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        getStock().then(res => setProductos(res.filter(prods => prods.category == categoryId)))
    }, [categoryId])

    return <section className="productos">
        <h2>{greeting}</h2>
        <ItemList items={productos}/>
    </section>
}

export default ItemListContainer;