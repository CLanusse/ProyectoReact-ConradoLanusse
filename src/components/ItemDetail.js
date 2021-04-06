import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({title, img, detail, precio, category, stock}) => {

    const [count, setCount] = useState(0)

    const addHandler = (cantidad)=> {
        console.log(`Agregados ${cantidad} ${title} al carrito`)
        setCount(cantidad)
        
    };
    
    return <div className="itemDetail">
            <h3>{title}</h3>
            <div className="detailContainer">
                <img src={img} alt=""></img>
                <div className="detailInfo">
                    <p>{detail}</p>
                    <div className="detailPrecio">
                        <p>Precio: ${precio}</p>

                        {count === 0 ? 
                            <ItemCount stock={stock} onAdd={addHandler} />
                            :
                            <Link to="/cart">
                                <button className="boton-terminar">Terminar mi compra</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
            <Link to={`/category/${category}`}>Volver</Link>
    </div>

}

export default ItemDetail;