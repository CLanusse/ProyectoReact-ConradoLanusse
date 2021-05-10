import React from 'react'
import { Link } from 'react-router-dom'

export const CheckoutSuccess = ({orden}) => {
    return (
        <div className="success">
            <h3>¡Su orden ha sido procesada exitosamente!</h3>

            <p>El código de su compra es</p>
            <p className="codigo">{orden}</p>
            <p>Asegúrese de guardarlo</p>
            <p className="last">¡Gracias por comprar en John Cook!</p>
            <Link to='/'>Volver</Link>
        </div>
    )
}
