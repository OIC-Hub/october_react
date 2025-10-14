import axios from "axios";
import React, { useEffect, useState } from "react";

const TuesdayClass = () => {
  const [recipes, setRecipes] = useState([]);
  const fetchApi = async () => {
    try {
      await axios.get("https://dummyjson.com/recipes").then((response) => {
        setRecipes(response.data.recipes);
        // console.log(response.data.recipes);
    console.log(Math.ceil(Math.random()* 100));
      });
    } catch (error) {
        
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {recipes.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <p>
            {item.ingredients.map((ingredient) => (
              <span key={ingredient}>{ingredient}, </span>
            ))}
          </p>
        </div>
      ))}
    </>
  );
};

export default TuesdayClass;
