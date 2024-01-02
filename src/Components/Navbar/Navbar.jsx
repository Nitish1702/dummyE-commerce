import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart_icn from "../Assets/cart_icn.png";
import logo1 from "../Assets/logo1.png";
import { SearchResults } from "./SearchResults";

import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  ///searchbar
  const fetchData = (value) => {
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((response) => response.json())
      .then(async (json) => {
        // console.log(json.products)
        const results = await json.products.filter((product) => {
          return (
            product &&
            product.name &&
            product.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]); // Set results to an empty array in case of an error
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo1} alt="" />
          <p>SHOPPER</p>
        </div>
        <div className="searchbar">
          {/* <SearchResults results={results} /> */}
          {results.length > 0 && <SearchResults results={results} />}

          {/* searchbar */}

          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
              id="search"
              placeholder="Type to search"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>

        {/* navbar */}
        <div className="nav-cart">
          <Link to="/cart">
            <img src={cart_icn} alt="" />
          </Link>
          <div className="nav-cart-counter">0</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
