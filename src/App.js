import NavComponent from './components/NavComponent'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailCointainer'

function App() {
  return (
    <div>
      <NavComponent />
      <ItemListContainer greeting="¡Nuestros últimos productos!"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
