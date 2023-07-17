import React from 'react';
import './App.css';
import Product from './components/product'
import productData from './data/products.json'
import Footer from './components/Footer';


// we set equal our products
const intialState = {
    products: productData
}
// this.state is our brain 
// exntending functionality from react.component base class
class Products extends React.Component {
    //adding local State to class to initialize our state object.
    constructor() {
        super()
        this.state = intialState
    }


    //filtering thru all our products
    //onChange I want this code to RUN/FILTER
    filterProducts = (evt) => {
        // this value shows my values that i click on
        // retrive the value
        let value = evt.target.value
        // spread operator makes copy of existing object
        const allProducts = [...intialState.products]
         // reset our products when we want find new products
        if (value === "All") {
            // return all products
            this.setState({ products: allProducts })
            return
        }
        // new array with all elements 
        const filterProducts = allProducts.filter(product => product.category === value)
        // only products that we filter
        // 
        this.setState({ products: filterProducts })
        //reset the array when filtering out

    }

    // rendering to DOM
    render() {
        const mappedProducts = this.state.products.map(product => {
            return <Product name={product.name} price={product.price} description={product.description} img={product.img} />
        })
        return (
            <div className="product-page">
                <div className="text-title">
                    <h1>Our Collection</h1>
                   
                </div>

                <select className="btn" onChange={evt => this.filterProducts(evt)} >
                    <option value="All">Featured</option>
                    <option value="Tops">Tops</option>
                    <option value="shoes">Shoes</option>
                    <option value="accessories">Accessories</option>
                </select>
                <div className="products-container">
                    {mappedProducts}
                </div>
            </div>
   
  );
}
}
export default Products;
