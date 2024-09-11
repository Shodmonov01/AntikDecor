import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import "./home.welcome.scss";
import { getData } from "../../../../utils";
import youtube from "../../../../assets/svg/youtube_small.svg";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";

function HomeWelcome() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    async function getBanners(url) {
      const res = await getData(url);
      setBanners(res);
    }
    getBanners("banners/");
  }, []);
  const handleScrollTo = () => {
    scroller.scrollTo("news", {
      duration: 500,
      delay: 0,
    });
  };

  return (
    <div className="home-welcome">
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ el: ".pagination_small" }}
        navigation={{
          prevEl: ".pagination_prev_btn",
          nextEl: ".pagination_next_btn",
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {banners?.map((el, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${el.image})` }}
          >
            <div className="home-welcome__content">
              <h1>{el.title}</h1>
              <p>{el.subtitle}</p>
              <div>
                {el.title !== "Первый в РосСии гравюрный кабинет" && (
                  <>
                    {el.title === "Винный антиквариат" ? (
                      <Link to="/catalog/2" className="catalog-btn">
                        Перейти в каталог
                      </Link>
                    ) : (
                      <button className="catalog-btn" onClick={handleScrollTo}>
                        Подробнее
                      </button>
                    )}

                    {el.button_url && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="youtube-btn"
                        href={`${el.button_url}`}
                      >
                        <img src={youtube} alt="youtube icon" />
                        <span>Mы в YouTube</span>
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="pagination_small"></div>
        <div className="pagination_large">
          <div className="pagination_prev_btn">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="welcome__polygon"
                d="M8.29995 1.40204L1.6228 5.25709L8.29995 9.11214L8.29995 1.40204Z"
                stroke="white"
              />
            </svg>
          </div>
          <div className="pagination_next_btn">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="welcome__polygon"
                d="M8.29995 1.40204L1.6228 5.25709L8.29995 9.11214L8.29995 1.40204Z"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default HomeWelcome;
