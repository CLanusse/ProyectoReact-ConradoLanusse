import React, {useState, useEffect }from 'react';
import getStock from '../stock/stock';
import ItemList from './ItemList'


const ItemListContainer = ({greeting})=>{
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        getStock().then(res => setProductos(res))
    }, [])

    return <section className="productos">
        <h2>{greeting}</h2>
        <ItemList items={productos}/>
    </section>
}

export default ItemListContainer;