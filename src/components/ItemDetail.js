import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

    const [count, setCount] = useState(0)

    const {addItem} = useContext(CartContext)

    const addHandler = (cantidad)=> {
        addItem(item, cantidad)
        setCount(cantidad)
    };
    
    return <div className="itemDetail">
            <h3>{item?.title}</h3>
            <div className="detailContainer">
                <img src={item?.img} alt=""></img>
                <div className="detailInfo">
                    <p>{item?.detail}</p>
                    <div className="detailPrecio">
                        <p>Precio: ${(item?.precio).toFixed(2)}</p>

                        {count === 0 ? 
                            <ItemCount stock={item?.stock} onAdd={addHandler} />
                            :
                            <Link to="/cart">
                                <button className="boton-terminar">Terminar mi compra</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
            <Link to={`/category/${item?.category}`} className="boton-volver">Volver</Link>
    </div>

}

export default ItemDetail;