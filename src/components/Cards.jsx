import React from 'react'
import Laptop from "/laptop1.jpg"
import { FaCartPlus } from "react-icons/fa";
import Button from './Button';

const Cards = () => {
    const cardData = [
      {
        id: 1,
        title: "Laptop",
        price: 45000,
        img: "/laptop1.jpg",
      },
      {
        id: 2,
        title: "Laptop",
        price: 45000,
        img: "/laptop1.jpg",
      },
      {
        id: 3,
        title: "Laptop",
        // price: 45000,
        img: "/laptop1.jpg",
      },
      {
        id: 4,
        title: "Laptop",
        price: 45000,
        img: "/laptop1.jpg",
      },
    ];
        const handleBuy = () => {
          localStorage.setItem("cardData", JSON.stringify(cardData));
          alert("Item added to cart");
        };
        if (cardData.length >= 4) {
          console.log("Data is available");
        }
  return (
    <>
      {cardData.length >= 4 ? (
        cardData.map((card, index) => (
          <div key={index}>
            <img src={Laptop} alt="Laptop" />
            <h3>{card.title}</h3>
            <p>Price: {card.price ? card.price : "Out of Stock"}</p>
            {/* <button onClick={handleBuy}>
            Buy Now <FaCartPlus />{" "}
          </button> */}
            <Button label="Buy Now" icon={<FaCartPlus />} />
          </div>
        ))
      ) : (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}

export default Cards