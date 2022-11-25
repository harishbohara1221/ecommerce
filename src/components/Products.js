import React, {useContext} from 'react';
import {ProductsContext} from '../Global/ProductContext'



const Products = () => {
    const data = useContext(ProductsContext);
    console.log(data);
  return (
    <h1>Products</h1>
  )
}

export default Products