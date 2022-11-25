import React, {createContext, useState} from 'react';
import headphone from '../assets/headphone.jpg';
import dslr from '../assets/dslr.jpg';
import iphone from '../assets/iphone.jpg';
import microphone from '../assets/microphone.jpg';
import perfume from '../assets/perfume.jpg';
import ring from '../assets/ring.jpg';
import shoe from '../assets/shoe.jpg';
import watch from '../assets/watch.jpg'



export const ProductsContext = createContext();

const ProductContextProvider = (props) => {
    const [products] = useState([
        {id:1, name:'DSLR', price:300, image:dslr,status:'hot'},
        {id:2, name:'Headphone', price:30, image:headphone,status:'new'},
        {id:3, name:'Iphone', price:400, image:iphone,status:'hot'},
        {id:4, name:'Microphone', price:200, image:microphone,status:'hot'},
        {id:5, name:'Perfume', price:40, image:perfume,status:'hot'},
        {id:6, name:'Rings', price:100, image:ring,status:'new'},
        {id:7, name:'Shoes', price:500, image:shoe,status:'hot'},
        {id:8, name:'Watch', price:300, image:watch,status:'new'}
    ])
  return (
    <ProductsContext.Provider value={{products:[...products]}}>
        {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductContextProvider;