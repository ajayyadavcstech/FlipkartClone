import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar'
import Shoppinglist from './components/shoppinglist/Shoppinglist';
import './App.css'
import Carousel from './components/Carousel/Carousel';
import Hooks from './components/Concepts/Hooks';
import Calculator from './components/Practice/Calculator/Calculator';
import Deals from './components/Blockbusterdeals/Deals'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Shoppinglist/>
      <Carousel/>
      <Deals/>
      {/* <Hooks/> */}
      {/* <Calculator/> */}
    </div>
  );
}

export default App;
