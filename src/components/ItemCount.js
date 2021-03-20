import React, {useState} from 'react';

const ItemCount = ({stock, onAdd})=>{
    const [counter, setCounter] = useState(1);

    const sumarCantidad = ()=> counter+1 <= stock ? setCounter(counter + 1) : setCounter(counter);
    const restarCantidad = ()=> counter-1 >= 1 ? setCounter(counter - 1) : setCounter(1);
    const addHandler = ()=> onAdd(counter);
    
    return <div className="contador-card">
                <div>
                    <button onClick={restarCantidad}>-</button>
                    <p>{counter}</p>
                    <button onClick={sumarCantidad}>+</button>
                </div>
                <button onClick={addHandler} className="boton-agregar">Agregar al carrito</button>
            </div>
}

export default ItemCount;