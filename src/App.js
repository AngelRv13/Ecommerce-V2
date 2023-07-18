import React from 'react';
import './App.css';
import Products from './Products'
import Nav from './components/Nav'
import Contacts from './Contacts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';


// everything goes here
function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contacts />} />
        
        </Routes>
      </Router>

      
    </div>
    
  );
}





export default App;
