import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./news.carousel.scss";
import arrowRight from "../../assets/svg/arrow_right_accent.svg";
import { useSelector } from "react-redux";

function NewsCarousel() {
  const { newsData } = useSelector((state) => state.newsData);
  return (
    <div className="news-carousel">
      <section className="section">
        <div className="container">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              prevEl: ".prev_btn_news",
              nextEl: ".next_btn_news",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {newsData?.map((el) => (
              <SwiperSlide key={el.id}>
                {
                  <Link to={`/news/${el.id}/`} className="news__card">
                    <div className="img-wrapper">
                      <img src={el.image} alt={el.title} />
                    </div>
                    <div className="news__card_content">
                      <span>{el.date}</span>
                      <h3>{el.title}</h3>
                      <p
                        className="news__desc"
                        dangerouslySetInnerHTML={{ __html: el.content }}
                      />
                      <div className="news__card_footer">
                        <span>Смотреть</span>
                        <span>
                          <img src={arrowRight} alt="arrow" />
                        </span>
                      </div>
                    </div>
                  </Link>
                }
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="navigation_mobile">
            <button className="prev_btn prev_btn_news">
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
            <button className="next_btn next_btn_news">
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
          <Link className="all-news" to="/news">
            Bсе статьи{" "}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NewsCarousel;
