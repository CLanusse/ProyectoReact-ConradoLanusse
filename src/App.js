import NavComponent from './components/NavComponent'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <NavComponent />
      <ItemListContainer greeting="¡Nuestros últimos productos!"/>
    </div>
  );
}

export default App;
