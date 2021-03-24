import React from 'react';
import Item from './Item';

const ItemList = ({items = []}) => {
  return <div className="contenedorProductos">

            {items.map(prod => <Item id={prod.id} titulo={prod.title} imagen={prod.img}  descripcion={prod.description} precio={prod.precio} stock={prod.stock} />)}
        </div>

}

export default ItemList