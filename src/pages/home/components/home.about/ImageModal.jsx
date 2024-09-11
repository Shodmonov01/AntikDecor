import React from "react";
import "../../../../components/ProductModal/ProductModal.scss";
const ImageModal = ({ product, isVisible, toggleModal }) => {
  return (
    <>
      {isVisible && (
        <div className="product-modal">
          <div className="product-modal__content">
            <img
              src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
              alt="close-icon"
              className="product-modal__close"
              onClick={toggleModal}
            />
            <img src={product} className="product-modal__img" alt="" />
          </div>
          <div className="overlay" onClick={toggleModal}></div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
