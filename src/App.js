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
import ProductList from './Components/Container/Products';
import { OrderProvider } from './Context/OrderContext';
import { StockProvider} from './Context/StockContext'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <StockProvider>
    <CarProvider>
    <OrderProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={<Container />}/>
        <Route path='/category/:categoryName' element={<ItemListCategory />}/>
        <Route path='/category/item/:itemId' element={<Container />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout/>}/> 
        <Route path='/productList/:productId' element={<ProductList/>}/>
        <Route path='/:*' element={<h1>Not found</h1>}/> 
      </Routes>
      </OrderProvider>
      </CarProvider>
      </StockProvider>
    </BrowserRouter>
    <Footer />
    </div>
  );
}
export default App;
