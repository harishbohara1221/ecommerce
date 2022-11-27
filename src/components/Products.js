import React, {useContext} from 'react';
import {ProductsContext} from '../Global/ProductContext'



const Products = () => {
    const {products} = useContext(ProductsContext);
  return (
    <div className='container'>
    <div className="products">
      {products.map((product) =>(
        <div className="Product" key={product.id}>
          <div className='cover'>
                {product.status==='hot' ? <div className='hot'>Hot</div>:""}
                {product.status==='new' ? <div className='new'>New</div>:""}
                <div className="Product-image">
                  <img src={product.image} alt=""/>
                </div>
                <div className="Product-details">
                  <div className="Product-name">
                    {product.name}
                  </div>
                  <div className="Product-price">
                    Rs.{product.price}.00
                  </div>

                </div>
                
          </div>  
          <div className='add-to-cart'>add to cart</div>
        </div>
       
      ))}
    </div>
    </div>
  )
}

export default Products;