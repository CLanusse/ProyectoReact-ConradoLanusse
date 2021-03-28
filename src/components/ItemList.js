import React from 'react';
import Item from './Item';

const ItemList = ({items = []}) => {
  return <div className="contenedorProductos">

            {items.map(prod => <Item item={prod} />)}
        </div>

}

export default ItemList