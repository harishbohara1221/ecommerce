import React from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import Banner from './components/Banner';
import ProductContextProvider from "./Global/ProductContext";
import Products from './components/Products';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <ProductContextProvider>
        <Products/>
      </ProductContextProvider>

    </div>
  );
}

export default App;
