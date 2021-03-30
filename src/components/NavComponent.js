import React from 'react';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'


const NavComponent = ()=>{
    return (
    
    <header className="header">
        <Link to="/">
            <h1>Logo E-Commerce</h1>
        </Link>

        <nav>
            <Link to="/" className="categoria">Inicio</Link>
            <Link to={`/category/vinos`} className="categoria">Vinos</Link>
            <Link to={`/category/cervezas`} className="categoria">Cervezas</Link>
            <Link to={`/category/licores`} className="categoria">Licores</Link>
            <Link to={`/category/aperitivos`} className="categoria">Aperitivos</Link>
            <CartWidget contador={0} />
        </nav>
    </header>
            
    )   
}

export default NavComponent;