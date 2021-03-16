import React from 'react';
import CartWidget from './CartWidget'

const NavComponent = ()=>{
    return <header className="header">
                <h1>Logo E-Commerce</h1>

                <nav>
                    <button className="categoria">Vinos</button>
                    <button className="categoria">Cervezas</button>
                    <button className="categoria">Licores</button>
                    <button className="categoria">Aperitivos</button>
                    <CartWidget contador={0} />
                </nav>
            </header>
    
}

export default NavComponent;