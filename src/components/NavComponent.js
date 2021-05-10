import React from 'react';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavComponent = ()=>{

    
    return (
    
    <header className="header">
        <div>
            <Link to="/">
                <h1>John Cook Bodega</h1>
            </Link>
            <CartWidget/>
        </div>

        <nav>
            <Link to={`/category/catalogo`} className="categoria">Todos los productos</Link>
            <Link to={`/category/vinos tintos`} className="categoria">Vinos Tintos</Link>
            <Link to={`/category/vinos blancos y rosados`} className="categoria">Vinos Blancos y Rosados</Link>
            <Link to={`/category/vinos organicos`} className="categoria">Vinos Orgánicos</Link>
            <Link to={`/category/cajas`} className="categoria">Cajas</Link>
            <Link to={`/category/bebidas espirituosas`} className="categoria">Bebidas espirituosas</Link>
        </nav>
    </header>
            
    )   
}

export default NavComponent;