import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
const Test = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
       try {
         const response = await axios.get('http://localhost:4001/api/products'); // Replace with your API endpoint
         setProducts(response.data);
       } catch (error) {
         console.error(error);
       }
        };
       
        fetchData();
      }, []);

      return (
       <div>
        {products.map(product => (
       <div className='shop-tile' id='shopTile' key={product.id} >
        <img src={product.image} className="productImg" alt={product.description}></img>
        <h2 className='shop-h2'>{product.name}</h2>
        <p className='shop-description'>{product.description}</p>
        <h2 className='shop-h2'>${product.price}</h2> 
       </div>
      
     ))}
       </div>
      )
}
export default Test;