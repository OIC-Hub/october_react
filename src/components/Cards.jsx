import React from 'react'
import Laptop from "/laptop1.jpg"
import { FaCartPlus } from "react-icons/fa";

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
        price: 45000,
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
  return (
    <>
      {cardData.map((card, index) => (
        <div key={index}>
          <img src={Laptop} alt="Laptop" />
          <h3>{card.title}</h3>
          <p>Price: {card.price}</p>
          <button onClick={handleBuy}>
            Buy Now <FaCartPlus />{" "}
          </button>
        </div>
      ))}
    </>
  );
}

export default Cards