import React from 'react';
import './App.css';
import Product from './components/product'
import Footer from './components/Footer';


// we set equal our products
const intialState = {
    filteredProducts: [],
    //all products is used to hold all products
    allProducts: [],
    isLoading: true,
    errorMessage: null
}
// this.state is our brain 
// exntending functionality from react.component base class
class Products extends React.Component {
    //adding local State to class to initialize our state object.
    constructor() {
        super()
        this.state = intialState
    }

    async componentDidMount() {
        try {
          const response = await fetch('http://localhost:4001/api/products');
          const data = await response.json();
          this.setState({ filteredProducts: data, allProducts:data, isLoading: false });
    
        } catch (error) {
          this.setState({ error: "failed to get products", isLoading: false });
        }
      }

    //filtering thru all our products
    //onChange I want this code to RUN/FILTER
    filterProducts = (evt) => {
        // this value shows my values that i click on
        // retrive the value
        let value = evt.target.value
        // spread operator makes copy of existing object
        const allProducts = [...this.state.allProducts]
         // reset our products when we want find new products
         console.log(value)
        if (value === "All") {
            // return all products
            this.setState({ products: allProducts })
            return
        }
        // new array with all elements 
        const filterProducts = allProducts.filter(product => product.category.toLowerCase() === value.toLowerCase())
        // only products that we filter
        // 
        this.setState({ filteredProducts: filterProducts })
        //reset the array when filtering out

    }

    // rendering to DOM
    render() {
        const mappedProducts = this.state.filteredProducts.map(product => {
            return <Product name={product.name} price={product.price} description={product.description} img={product.image} />
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
