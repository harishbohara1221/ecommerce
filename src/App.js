import React from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import Banner from './components/Banner';
import ProductContextProvider from "./Global/ProductContext";
import Products from './components/Products';
import cart from './components/Cart'

function App() {
  return (
    <div>
      <ProductContextProvider>
        <Navbar/>
        <Banner/>
        <Products/>
      </ProductContextProvider>

    </div>
  );
}

export default App;
