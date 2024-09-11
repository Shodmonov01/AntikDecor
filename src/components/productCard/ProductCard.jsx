import "./product.card.scss";

function ProductCard({ el }) {
  return (
    <div className="product-card" id={el?.id}>
      <div className="card__img-wrapper">
        <img loading="lazy" src={el?.images[0]} alt={el?.title} />
      </div>
      <div className="card__content">
        <h3>{el?.name}</h3>
        <div className="card__footer">
          <div className="product__price">
            {el?.price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽
          </div>
          <div className="card__btn">
            <span>Смотреть</span>
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="card__arrow"
                d="M19.4596 5.45962C19.7135 5.20578 19.7135 4.79422 19.4596 4.54038L15.323 0.403808C15.0692 0.149967 14.6576 0.149967 14.4038 0.403807C14.15 0.657648 14.15 1.06921 14.4038 1.32305L18.0808 5L14.4038 8.67696C14.15 8.9308 14.15 9.34235 14.4038 9.5962C14.6576 9.85004 15.0692 9.85004 15.323 9.5962L19.4596 5.45962ZM-5.68248e-08 5.65L19 5.65L19 4.35L5.68248e-08 4.35L-5.68248e-08 5.65Z"
                fill="#9B9B9B"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
