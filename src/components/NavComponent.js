import React from 'react';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavComponent = ()=>{

    
    return (
    
    <header className="header">
        <div>
            <Link to="/">
                <h1>Logo E-Commerce</h1>
            </Link>
            <CartWidget/>
        </div>

        <nav>
            <Link to={`/category/todos`} className="categoria">Todos</Link>
            <Link to={`/category/vinos`} className="categoria">Vinos</Link>
            <Link to={`/category/cervezas`} className="categoria">Cervezas</Link>
            <Link to={`/category/licores`} className="categoria">Licores</Link>
            <Link to={`/category/whiskys`} className="categoria">Whiskys</Link>
        </nav>
    </header>
            
    )   
}

export default NavComponent;