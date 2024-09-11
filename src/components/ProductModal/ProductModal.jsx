import React, { useEffect, useState } from "react";
import "./ProductModal.scss";
import ImageZoom from "react-image-zooom";
const ProductModal = ({ product }) => {
  const [isToggleModal, setisToggleModal] = useState(false);
  const toggleModal = () => setisToggleModal((prev) => !prev);
  useEffect(() => {
    if (isToggleModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isToggleModal]);
  return (
    <>
      <img
        src={product}
        alt={product.name}
        className="preview-image"
        onClick={toggleModal}
      />
      {isToggleModal && (
        <div className="product-modal">
          <div className="product-modal__content">
            <img
              src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
              alt="close-icon"
              className="product-modal__close"
              onClick={toggleModal}
            />
            {/* <img src={product} className="product-modal__img" alt="" /> */}
            <ImageZoom
              src={product}
              className="product-modal__img"
              alt="product-image"
              zoom="200"
            />
          </div>
          <div className="overlay" onClick={toggleModal}></div>
        </div>
      )}
    </>
  );
};

export default ProductModal;
