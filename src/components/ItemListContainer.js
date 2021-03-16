import React from 'react';
import CardComponent from './CardComponent';

const ItemListContainer = ()=>{
    return <section className="productos">
        <h2>Nuestros productos</h2>
        <div className="contenedorProductos">
            <CardComponent titulo="Whisky 1" imagen='/img/whisky.jpg' descripcion="Un buen whisky" precio="$1000"/>
            <CardComponent titulo="Whisky 2" imagen='/img/whisky.jpg' descripcion="Un super buen whisky" precio="$3000"/>
            <CardComponent titulo="Whisky 3" imagen='/img/whisky.jpg' descripcion="Un re buen whisky" precio="$4000"/>
            <CardComponent titulo="Whisky 4" imagen='/img/whisky.jpg' descripcion="Un archi buen whisky" precio="$6000"/>
            <CardComponent titulo="Whisky 5" imagen='/img/whisky.jpg' descripcion="Un hiper whisky" precio="$12000"/>
        </div>
    </section>
}

export default ItemListContainer;