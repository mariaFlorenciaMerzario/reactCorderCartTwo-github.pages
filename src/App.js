import './App.css';
// /src/index.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/dist/dropdown.js";


import 'jquery/dist/jquery.min.js'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
    <Container/>
    <Footer />
    </div>
  );
}
export default App;
