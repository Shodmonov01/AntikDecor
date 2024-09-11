import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";

const Genres = () => {
  return (
    <div className="products__grid">
      {[0, 1].map((product) => (
        <Link to={""}>
          <ProductCard el={product} />
        </Link>
      ))}
    </div>
  );
};

export default Genres;
