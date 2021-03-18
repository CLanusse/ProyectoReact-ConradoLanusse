import React, {useState} from 'react';

const ItemCount = ({stock})=>{
    const [counter, setCounter] = useState(0);

    const sumarCantidad = ()=> counter+1<=stock ? setCounter(counter + 1) : setCounter(counter);
    const restarCantidad = ()=> counter-1>=0 ? setCounter(counter - 1) : setCounter(0);

    return <div className="contador-card">
                <div>
                    <button onClick={restarCantidad}>-</button>
                    <p>{counter}</p>
                    <button onClick={sumarCantidad}>+</button>
                </div>
                <button className="boton-agregar">Agregar al carrito</button>
            </div>
}

export default ItemCount;