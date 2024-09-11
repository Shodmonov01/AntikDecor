import { useEffect, useState } from "react";
import "./home.new.products.scss";
import arrow_white from "../../../../assets/svg/arrow_white.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { getData } from "../../../../utils";
import { Link } from "react-router-dom";

function HomeNewProducts() {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    async function getNewProducts(url) {
      const data = await getData(url);
      setNewProducts(data);
    }
    getNewProducts("new-products/");
  }, []);

  return (
    <div className="home-new-products">
      <section className="section">
        <div className="container">
          <div>
            <h2 className="subtitle">Новинки</h2>
          </div>

          <Swiper
            modules={[Navigation]}
            centeredSlides={false}
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              prevEl: ".prev_btn_new-product",
              nextEl: ".next_btn_new-product",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: {
                spaceBetween: 15,
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {newProducts?.map((el) => (
              <SwiperSlide key={el.id}>
                {
                  <Link to={`products/${el.id}`} className="new-product__card">
                    <div className="new-product__img-wrapper">
                      <img src={el.images[0]} alt="pencil draw" />
                    </div>

                    <p>{el.catalog}</p>
                    <h3 className="new-product__card_title">{el.name}</h3>
                    <div className="new-product__card_footer">
                      <div className="new-product__card_price">
                        {el.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                        ₽
                      </div>
                      <div className="new-product__card_btn">
                        <span>Смотреть</span>
                        <span>
                          <svg
                            width="20"
                            height="10"
                            viewBox="0 0 20 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="arrow"
                              d="M19.4596 5.45962C19.7135 5.20578 19.7135 4.79422 19.4596 4.54038L15.323 0.403808C15.0692 0.149967 14.6576 0.149967 14.4038 0.403807C14.15 0.657648 14.15 1.06921 14.4038 1.32305L18.0808 5L14.4038 8.67696C14.15 8.9308 14.15 9.34235 14.4038 9.5962C14.6576 9.85004 15.0692 9.85004 15.323 9.5962L19.4596 5.45962ZM-5.68248e-08 5.65L19 5.65L19 4.35L5.68248e-08 4.35L-5.68248e-08 5.65Z"
                              fill="#9B9B9B"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                }
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="navigation_mobile">
            <button className="prev_btn prev_btn_new-product">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="55"
                viewBox="0 0 60 55"
                fill="none"
              >
                <path
                  d="M31.3002 23.4021L24.623 27.2572L31.3002 31.1122L31.3002 23.4021Z"
                  stroke="#EA5544"
                />
                <rect
                  x="1"
                  y="1"
                  width="57.0571"
                  height="52.5143"
                  rx="4"
                  stroke="#EA5544"
                  stroke-width="2"
                />
              </svg>
            </button>
            <button className="next_btn next_btn_new-product">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="55"
                viewBox="0 0 60 55"
                fill="none"
              >
                <path
                  d="M27.8141 23.4021L34.4912 27.2572L27.8141 31.1122L27.8141 23.4021Z"
                  stroke="#EA5544"
                />
                <rect
                  x="-1"
                  y="1"
                  width="57.0571"
                  height="52.5143"
                  rx="4"
                  transform="matrix(-1 0 0 1 57.1143 0)"
                  stroke="#EA5544"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeNewProducts;
