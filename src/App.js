import './App.css';
// /src/index.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/dist/dropdown.js";
import Cart from './Components/Cart';

import 'jquery/dist/jquery.min.js'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter , Route , Routes} from 'react-router-dom';

import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import ItemListCategory from './Components/Container/ItemListCategory/ItemListCategory';
import Navbar from './Components/Navbar/Navbar';
import { CarProvider } from './Context/CartContext';
import Checkout from './Components/Checkout/Checkout';
import ItemDetail from './Components/Container/ItemDetail';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <CarProvider>
    <Navbar />
      <Routes>
        <Route path='/reactCoder.github.io/build' element={<Container />}/>
        <Route path='/reactCoder.github.io/build/category/:categoryId' element={<ItemListCategory />}/>
        <Route path='/reactCoder.github.io/build/category/item/:itemId' element={<Container />}/>
        <Route path='/reactCoder.github.io/build/cart' element={<Cart />}/>
        <Route path='/reactCoder.github.io/build/checkout' element={<Checkout/>}/> 
        <Route path='/reactCoder.github.io/build/itemDetail/:productId' element={<ItemDetail/>}/> 
        <Route path='/reactCoder.github.io/build/:*' element={<h1>Not found</h1>}/> 

      </Routes>
      </CarProvider>
    </BrowserRouter>
  
    <Footer />
    </div>
  );
}
export default App;
