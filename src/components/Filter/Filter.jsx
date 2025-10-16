import React, { useState, useEffect } from "react";
import Recommended from "./recommendation/Recommendation";
import Sidebar from "./siderBar/siderBar";
import Products from "./productCard/products";
import api from "../../utils/api-call";
import { backEndPoints } from "../../utils/enum";
import BestSeller from "./productCard/card";
import { Link } from "react-router-dom";
import { apiUrl } from "../../utils/env";
export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [dataSuit, setData] = useState([]);

  useEffect(() => {
    const getSuit = async () => {
      try {
        const response = await api.get(`${backEndPoints.CLOTHES}`);
        console.log(response.data);
        if (response.data.length > 0) {
          setData(response.data);
        }
      } catch (err) {
        console.log(err.response.data);
      }
    };
    getSuit();
  }, []);

  const filteredItems = dataSuit.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(dataSuit, selected, query) {
    let filteredProducts = dataSuit;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = dataSuit.filter(({ category, price, name, color }) => {
        const categoryName = category && category.name;
        return (
          (categoryName &&
            categoryName.toLowerCase() === selected.toLowerCase()) ||
          price === selected ||
          name.toLowerCase().includes(selected.toLowerCase()) ||
          color === selected
        );
      });
    }

    if (filteredProducts.length === 0) {
      return <p>No results found for the selected filter.</p>;
    }

    return filteredProducts.map(
      ({ image, name, rating, price, id, description }) => (
        <Link to={`/detail/${id}`}>
          <BestSeller
            key={id}
            src={`${apiUrl}${image}`}
            name={name}
            star={rating}
            price={price}
            description={description}
          />
        </Link>
      )
    );
  }

  const result = filteredData(dataSuit, selectedCategory, query);

  return (
    <div className="max-w-7xl  px-1  flex justify-center gap-1">
      <div className="md:block hidden  sticky top-0 border p-6 w-56">
      <span className="font-medium text-base">Filter by</span>
        
        <Sidebar handleChange={handleChange} />
      </div>
      <div className="ml-1 flex flex-col pt-4"> 
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </div>
    </div>
  );
}
