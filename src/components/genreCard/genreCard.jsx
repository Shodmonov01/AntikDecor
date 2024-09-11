import React from "react";

const GenreCard = ({ el }) => {
  return (
    <div className="product-card">
      <div className="card__img-wrapper">
        <img loading="lazy" src={el?.image} alt="genre" />
      </div>
      <div className="card__content">
        <h3>{el?.name}</h3>
      </div>
    </div>
  );
};

export default GenreCard;
