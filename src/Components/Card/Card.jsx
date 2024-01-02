// Card.js
import React, { useState } from "react";
import "./Card.css";
import SimpleImageSlider from "react-simple-image-slider";

const Card = ({ product, onAddToCart }) => {
  const images = product?.images || [];
  const [isAddedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedToCart(true);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      {images.length > 0 && (
        <SimpleImageSlider
          width={220}
          height={220}
          images={images.map((img) => ({ url: img }))}
          showBullets={true}
          showNavs={true}
        />
      )}
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount Price: ${product.discountPercentage}</p>
      <div className="cart">
      <button className="cart_btn"
        onClick={handleAddToCart}
        disabled={isAddedToCart}
      >
        {isAddedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
      </div>
    </div>
  );
};

export default Card;
