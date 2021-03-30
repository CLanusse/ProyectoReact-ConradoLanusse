import NavComponent from './components/NavComponent'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailCointainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>

      <div>
        <NavComponent />
        <Switch>

          <Route exact path="/">
            Página de inicio en construcción...
          </Route>

          <Route path="/category/:categoryId">
            <ItemListContainer greeting="¡Nuestros últimos productos!"/>
          </Route>

          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route path="*">
            404
          </Route>

        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
