import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../hero/Hero";
import Card from "../Card/Card";
import "../Card/Card.css";
import Footer from "../Footer/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [apiStatus, setApiStatus] = useState("");

  // dropdown

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const authToken = localStorage.getItem("authToken");

        if (!authToken) {
          console.error("Authentication token not found. Please log in.");
          return;
        }

        const apiUrl = "https://dummyjson.com/products"; // Replace with your actual API URL
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const data = await response.json();
        console.log(data);
        setProducts(data.products);
        setApiStatus("success");
      } catch (error) {
        console.error("Error fetching products:", error);
        setApiStatus("error");
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        {apiStatus === "success" ? (
          <div className="product-cards-container">
            <h3>Products</h3>
            <div className="card1">
              {products.map((product) => (
                // <div key={product.id} className="product-card">
                //   <h4>{product.title}</h4>
                //   <p>{product.description}</p>
                //   <p>Price: ${product.price}</p>
                //   <p>Discount Price: ${product.discount_price}</p>
                //   <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                // </div>
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <p>
            {apiStatus === "error" ? "Error fetching products." : "Loading..."}
          </p>
        )}
        <Footer/>
      </div>
    </>
  );
};

export default Home;
