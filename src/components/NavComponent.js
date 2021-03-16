import React from 'react';
import CartWidget from './CartWidget'

const NavComponent = ()=>{
    return <header className="header">
                <h1>Logo E-Commerce</h1>

                <nav>
                    <a href="#">Nosotros</a>
                    <a href="#">Productos</a>
                    <a href="#">Contacto</a>
                    <CartWidget contador={0} />
                </nav>
            </header>
    
}

export default NavComponent;