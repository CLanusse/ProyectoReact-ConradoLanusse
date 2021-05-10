import React from 'react'
import { Link } from 'react-router-dom'

export const FooterComponent = () => {
    return (

    <footer className="footer">
        <div className="contenedor">
            <div className="footer__info">
                <div className="footer__datos">
                    <h3>John Cook Bodega</h3>
                    <p><i className="fas fa-map-marker-alt"></i>Undiano 551, Bahía Blanca, Bs. As.</p>
                    <p><i className="fab fa-whatsapp"></i>+54 9 291 455-8749</p>
                </div>
            
                <div className="footer__media">
                    <Link to=''><i className="fab fa-facebook"></i></Link>
                    <Link to=''><i className="fab fa-instagram"></i></Link>
                    <Link to=''><i className="fab fa-twitter"></i></Link>
                </div>
            </div>
        </div>
    </footer>
    )
}
