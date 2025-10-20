import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const handleNavigate =(id) => {
        navigate(`/products/${id}`);
    }
  useEffect(() => {
    try {
        const fetchProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
            console.log(response.data);
        }
        fetchProducts();
    } catch (error) {
      console.log("Products page loaded");
    }
  }, []);
  return <>
   {
    products.map((product) => (
        <div key={product.id} style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2> 
            <p>{product.description}</p>       
            <p>{product.price}</p>
            <button onClick={() => handleNavigate(product.id)}>View details</button>
        </div>
    ))}
  </>;
};

export default Products;
