import React from 'react';
import CardComponent from './CardComponent';

const ItemListContainer = ({greeting})=>{
    return <section className="productos">
        <h2>{greeting}</h2>
        <div className="contenedorProductos">
            <CardComponent titulo="Whisky 1" imagen='/img/whisky.jpg' descripcion="Un buen whisky" precio="$1000" stock={20}/>
            <CardComponent titulo="Whisky 2" imagen='/img/whisky.jpg' descripcion="Un super buen whisky" precio="$3000" stock={10}/>
            <CardComponent titulo="Whisky 3" imagen='/img/whisky.jpg' descripcion="Un re buen whisky" precio="$4000" stock={14}/>
            <CardComponent titulo="Whisky 4" imagen='/img/whisky.jpg' descripcion="Un archi buen whisky" precio="$6000" stock={6}/>
            <CardComponent titulo="Whisky 5" imagen='/img/whisky.jpg' descripcion="Un hiper whisky" precio="$12000" stock={4}/>
        </div>
    </section>
}

export default ItemListContainer;