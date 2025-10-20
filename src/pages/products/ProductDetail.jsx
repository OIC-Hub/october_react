import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
     const fetchProductDetail = async () => {
         try {
             const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
             console.log(response.data);
                setProduct(response.data);
         } catch (error) {
             console.log("Error fetching product detail", error);
         }
     }
     fetchProductDetail()
    }, [])
    
  return (
    <>
    <h1>Product Detail</h1>
    <img src={product.image} alt={product.name} />
    <p>Details for product ID: {id}</p>
    <p>Product Name: {product.name}</p>
    <p>Product Description: {product.description}</p>
    <p>Product Price:${product.price}</p>
    <p>Product Category: {product.category}</p>
    </>
  )
}

export default ProductDetail