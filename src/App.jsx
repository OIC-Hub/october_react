import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/products/Products'
import ProductDetail from './pages/products/ProductDetail'
import Sidebar from './common/Sidebar'
// import Button from './components/Button'
// import Cards from './components/Cards'
// import Form from './components/Form'
// import MondayClass from './components/MondayClass'
// import Product from './components/product'
// import TuesdayClass from './components/TuesdayClass'

function App() {


  return (
    <>
      <BrowserRouter>               
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      {/* <h1>Hello React!</h1> */}
      {/* <MondayClass /> */}
      {/* <TuesdayClass /> */}
      {/* <Button />
      <Cards />
      <Form />
      <Product /> */}
    </>
  );
}

export default App
