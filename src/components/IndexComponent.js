import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const IndexComponent = () => {

    const [counter, setCounter] = useState(1)

    useEffect(()=>{
        setTimeout(()=>{
            if (counter === 3) {
                setCounter(1)
            } else {
                setCounter(counter + 1)
            }
        },5000)
    }, [counter])

    return (
        <div className="index-container">
                <div className={'banner back' + counter}>
                    <div className="banner-info">
                        <h2>Bienvenidos a la bodega</h2>
                        <p>John Cook</p>
                        <p>Más de 30 años de experiencia y calidad</p>
                        <Link to={`/category/catalogo`}>Ingresar</Link>
                    </div>
                </div>        
        </div>
    )
}
