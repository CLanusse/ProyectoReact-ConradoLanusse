import NavComponent from './components/NavComponent'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailCointainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Cart } from './components/Cart'




function App() {

  
  return (

    <CartProvider>

        <BrowserRouter>

          <div>
            
            <NavComponent />
            <Switch>

              <Route exact path="/">
                Página de inicio en construcción...
                <ItemListContainer/>
              </Route>

              <Route path="/category/:categoryId">
                <ItemListContainer />
              </Route>

              <Route path="/item/:itemId">
                <ItemDetailContainer />
              </Route>

              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="*">
                404
              </Route>

            </Switch>
          </div>

        </BrowserRouter>
   
    </CartProvider>
  );
}

export default App;
