import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./productDetails.scss";
import { getData } from "../../../utils";
import AddToCartBtn from "../../../components/addToCardBtn/AddToCartBtn";
import SEO from "../../../components/SEO/SEO";
import ProductModal from "../../../components/ProductModal/ProductModal";
import youtubeSmall from "../../../assets/svg/youtube_small.svg";
import backIcon from "../../../assets/svg/arrow_right_accent.svg";

function ProductDetails({ setUpdateCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [openDesc, setOpenDesc] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function getProduct(url) {
      const data = await getData(url);
      setProduct(data);
    }
    getProduct(`product/${id}/`);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    const savedScrollPosition = location.state?.scrollPosition || 0;
    window.scrollTo({
      top: savedScrollPosition,
      behavior: "instant",
    });
  }, [location.state?.scrollPosition]);

  let hasProduct = false;
  if (product && product.images) {
    hasProduct = true;
  }

  async function addToCart() {
    setDisabledBtn(true);
    if (localStorage.getItem("cartData")) {
      if (JSON.parse(localStorage.getItem("cartData")).length) {
        const data = await JSON.parse(localStorage.getItem("cartData"));
        const idArr = await JSON.parse(localStorage.getItem("idArr"));

        if (!idArr?.includes(product.id)) {
          data?.push(product);
          idArr?.push(product.id);
          localStorage.setItem("cartData", JSON.stringify(data));
          localStorage.setItem("idArr", JSON.stringify(idArr));
        }
      } else {
        localStorage.setItem("cartData", JSON.stringify([product]));
        localStorage.setItem("idArr", JSON.stringify([product.id]));
      }
    } else {
      localStorage.setItem("cartData", JSON.stringify([product]));
      localStorage.setItem("idArr", JSON.stringify([product.id]));
    }
    setUpdateCart((prev) => !prev);
  }

  const handleBackClick = () => {
    navigate(-1, { state: { scrollPosition: window.scrollY } });
  };

  return (
    <div className="product-details">
      <SEO />
      <section className="section">
        {hasProduct && (
          <div className="container">
            <button className="back-btn" onClick={handleBackClick}>
              <img src={backIcon} alt="" /> Назад
            </button>
            <h2 className="subtitle">{product.name}</h2>
            <div className="product-details__wrapper">
              <div className="content-wrapper">
                <ProductModal product={product.images[0]} />
                <div className="product-details__content">
                  <p>
                    <span>Арт: </span>
                    <span>{product.vendor_code}</span>
                  </p>
                  <p>
                    <span>Название: </span>
                    <span>{product.name}</span>
                  </p>
                  <p>
                    <span>История: </span>
                    <span>{product.history}</span>
                  </p>
                  <p>
                    <span>Характеристики: </span>
                    <span>{product.size}</span>
                  </p>
                  <p>
                    <span>Размер: </span>
                    <span>{product.size}</span>
                  </p>
                  <p>
                    <span>Описание: </span>
                    <br></br>
                    <span
                      className={`product__description ${
                        openDesc && "open-desc"
                      }`}
                    >
                      <span
                        style={{ color: "#9b9b9b" }}
                        dangerouslySetInnerHTML={{
                          __html: product?.description,
                        }}
                      />
                    </span>
                  </p>
                  <p
                    className="read-more"
                    onClick={() => setOpenDesc(!openDesc)}
                  >
                    {openDesc ? "Закрыть описание" : "Читать далее"}
                  </p>
                  <p className="product-price">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                    ₽
                  </p>
                  <AddToCartBtn
                    product={product}
                    disabledBtn={disabledBtn}
                    setDisabledBtn={setDisabledBtn}
                    func={addToCart}
                  />
                </div>
              </div>
            </div>
            <div className="thumbnails">
              {product.images.map((image, idx) => (
                <div className="" key={idx}>
                  <ProductModal product={image} />
                </div>
              ))}
              <div className="youtube">
                <img src={youtubeSmall} alt="" />
              </div>
            </div>
          </div>
        )}

        <div className="catalog__navigations">
          <button
            className="navigation-btn"
            onClick={() => {
              window.scrollTo({
                top: window.scrollY - window.innerHeight,
              });
            }}
          >
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <button className="navigation-btn" onClick={navigate.bind(null, -1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
