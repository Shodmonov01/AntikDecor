import "./home.about.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import data from "../../../../data.json";
import { Link } from "react-router-dom";
import ProductModal from "../../../../components/ProductModal/ProductModal";
import ImageModal from "./ImageModal";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
const aboutData = data.aboutData;
function HomeAbout() {
  const { inView, ref } = useInView({
    triggerOnce: true,
  });

  const [product, setProduct] = useState({});
  const [isToggleModal, setisToggleModal] = useState(false);
  const toggleModal = (el) => {
    setisToggleModal((prev) => !prev);
    setProduct(el);
  };

  return (
    <div ref={ref} className="home-about">
      <section className="section">
        <div className="container">
          <ImageModal
            product={product.img}
            key={product.id}
            isVisible={isToggleModal}
            toggleModal={toggleModal}
          />
          <div className="home-about__content">
            <h2 className="subtitle">о нашей компании</h2>
            <div>
              <p>
                Гравюрный кабинет <span>Antikdecor</span> – камерный антикварный
                магазин в старинном доме начала XX века, расположенном на
                Садовом кольце в шаговой доступности от м.Курская.  
              </p>
              <p>
                Уже более полутора десятка лет специализируется на старых и
                старинных гравюрах, литографиях, эстампах и печатной графике
                всех стилей и направлений.
              </p>
              <Link to="/about">Подробнее о нас</Link>
            </div>
          </div>
          <div className="home-about__carousel">
            <Swiper
              modules={[Navigation]}
              centeredSlides={true}
              slidesPerView="auto"
              spaceBetween={19}
              loop={true}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              breakpoints={{
                640: { spaceBetween: 30 },
                920: {
                  centeredSlides: false,
                  spaceBetween: 12,
                },
              }}
            >
              {aboutData.map((el) => (
                <SwiperSlide key={el.id}>
                  <figure>
                    <img
                      src={el.img}
                      alt={el.title}
                      onClick={() => toggleModal(el)}
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-btns">
              <div className="prev-btn">
                <svg
                  width="34"
                  height="20"
                  viewBox="0 0 36 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="arrow"
                    d="M1.11612 10.8839C0.62796 10.3957 0.62796 9.60427 1.11612 9.11611L9.07107 1.16116C9.55922 0.673008 10.3507 0.673008 10.8388 1.16116C11.327 1.64932 11.327 2.44077 10.8388 2.92893L3.76777 10L10.8388 17.0711C11.327 17.5592 11.327 18.3507 10.8388 18.8388C10.3507 19.327 9.55922 19.327 9.07107 18.8388L1.11612 10.8839ZM36 11.25L2 11.25L2 8.75L36 8.75L36 11.25Z"
                    fill="#9B9B9B"
                  />
                </svg>
              </div>
              <div className="next-btn">
                <svg
                  width="34"
                  height="20"
                  viewBox="0 0 36 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="arrow"
                    d="M34.8839 10.8839C35.372 10.3957 35.372 9.60427 34.8839 9.11611L26.9289 1.16116C26.4408 0.673008 25.6493 0.673008 25.1612 1.16116C24.673 1.64932 24.673 2.44077 25.1612 2.92893L32.2322 10L25.1612 17.0711C24.673 17.5592 24.673 18.3507 25.1612 18.8388C25.6493 19.327 26.4408 19.327 26.9289 18.8388L34.8839 10.8839ZM1.09278e-07 11.25L34 11.25L34 8.75L-1.09278e-07 8.75L1.09278e-07 11.25Z"
                    fill="#9B9B9B"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home-about-youtube__video">
            {inView ? (
              <Swiper
                slidesPerView={1}
                spaceBetween={15}
                navigation={{
                  prevEl: ".prev-btn-you-tube",
                  nextEl: ".next-btn-you-tube",
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  920: { slidesPerView: 3 },
                  1400: { slidesPerView: 4 },
                }}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  {/* <iframe
                    width="100%"
                    height="100%"
                    src="https://rutube.ru/video/fa061d35a357ae1131359c6a4be9bf69/?r=a/"
                    title="Welcome в Гравюрный Кабинет!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe> */}

                  <iframe
                    width="720"
                    height="405"
                    src="https://rutube.ru/play/embed/fa061d35a357ae1131359c6a4be9bf69"
                    frameBorder="0"
                    allow="clipboard-write; autoplay"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
                <SwiperSlide>
                  {/* <iframe
                    src="https://www.youtube.com/embed/Vm06B-gwSJg"
                    title="Витрины Грвюрного Кабинета, редчайшая фарфоровая шкатулка"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe> */}

                  <iframe
                    width="720"
                    height="405"
                    src="https://rutube.ru/play/embed/7a3189f22879c461d5c8449e0f341432"
                    frameBorder="0"
                    allow="clipboard-write; autoplay"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
                <SwiperSlide>
                  {/* <iframe
                    src="https://www.youtube.com/embed/LXsE4vJ8goE"
                    title="Антиквар Владимир Гордеев о создании Гравюрного Кабинета в Москве"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe> */}

                  <iframe
                    width="720"
                    height="405"
                    src="https://rutube.ru/play/embed/cb48515b2d7f6fe38c72b72bd4e6d3c0"
                    frameBorder="0"
                    allow="clipboard-write; autoplay"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
                <SwiperSlide>
                  {/* <iframe
                    src="https://www.youtube.com/embed/64BSZhrVXOM"
                    title="Витринная коллекция Гравюрного Кабинета"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe> */}

                  <iframe
                    width="720"
                    height="405"
                    src="https://rutube.ru/play/embed/5bc5921ed6a5a2fbedb672d9da35d696"
                    frameBorder="0"
                    allow="clipboard-write; autoplay"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
                <SwiperSlide>
                  {/* <iframe
                    src="https://www.youtube.com/embed/G8eQciJTNmw"
                    title="Богатый экспозитарий гравюр, литографий и эстампов Гравюрного Кабинета"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe> */}

                  <iframe
                    width="720"
                    height="405"
                    src="https://rutube.ru/play/embed/95dccc65f340a3b4a0632ae4b4f33432"
                    frameBorder="0"
                    allow="clipboard-write; autoplay"
                    webkitAllowFullScreen
                    mozallowfullscreen
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
              </Swiper>
            ) : null}

            <div className="navigation_mobile">
              <button className="prev-btn-you-tube">
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
              <button className="next-btn-you-tube">
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
        </div>
        <div
          id="news"
          style={{ marginTop: "-100px", position: "absolute" }}
        ></div>
      </section>
    </div>
  );
}

export default HomeAbout;
