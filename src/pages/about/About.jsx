import { Swiper, SwiperSlide } from "swiper/react";
import "./about.scss";
import data from "../../data.json";
import VideosCarousel from "../../components/videosCarousel/VideosCarousel";
import ReviewsCarousel from "../../components/reviewsCarousel/ReviewsCarousel";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
const aboutData = data.aboutData;
const metaData = data.metadata;

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <SEO
        title={metaData.about.title}
        description={metaData.about.description}
      />
      <section className="section">
        <div className="container">
          <div className="about__text">
            <h2 className="subtitle">о нашей компании</h2>
            <p>
              Одно из направлениий компании ANTIKDECOR – дизайнерское оформление
              интерьеров с использованием предметов старины и антиквариата.
            </p>
            <p>
              ANTIKDECOR поможет Вам создать индивидуальный стиль в квартире,
              кабинете, офисе, апартаментах. Великолепно оформленные гравюры и
              литографии, офорты, рисунки; предметы мебели; живопись – вся
              коллекция ANTIKDECOR предназначена для создания уникальных
              интерьеров, современных, модных, с элементами прекрасной
              старины. ANTIKDECOR поможет создать настроение Вам и Вашим любимым
              людям.
            </p>
            <p>
              В нашей коллекции имеются оригинальные антикварные предметы,
              которые подходят для подарка на любой вкус.
            </p>
          </div>
          <div
            style={{ marginBottom: "8rem" }}
            className="home-about-youtube__video"
          >
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
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/lBOlbLkmyAA"
                  title="Welcome в Гравюрный Кабинет!"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </SwiperSlide>
              <SwiperSlide>
                <iframe
                  src="https://www.youtube.com/embed/Vm06B-gwSJg"
                  title="Витрины Грвюрного Кабинета, редчайшая фарфоровая шкатулка"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </SwiperSlide>
              <SwiperSlide>
                <iframe
                  src="https://www.youtube.com/embed/LXsE4vJ8goE"
                  title="Антиквар Владимир Гордеев о создании Гравюрного Кабинета в Москве"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </SwiperSlide>
              <SwiperSlide>
                <iframe
                  src="https://www.youtube.com/embed/64BSZhrVXOM"
                  title="Витринная коллекция Гравюрного Кабинета"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </SwiperSlide>
              <SwiperSlide>
                <iframe
                  src="https://www.youtube.com/embed/G8eQciJTNmw"
                  title="Богатый экспозитарий гравюр, литографий и эстампов Гравюрного Кабинета"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </SwiperSlide>
            </Swiper>
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

          <div className="about__info">
            <h2 className="subtitle">Как это работает?</h2>
            <p>
              У Вас есть желание сделать интерьер квартиры, дома или офиса
              уютным и комфортным? И Вам необходима помощь профессионального
              дизайнера интерьера?
            </p>
            <p>
              Мы окажем услугу по оформлению Вашего интерьера 
              <span>абсолютно бесплатно!!!</span>
            </p>
          </div>

          <div className="about__info-steps">
            <div className="info-step">
              <h3>01</h3>
              <p>
                Мы встречаемся у Вас на объекте обсуждаем и согласовываем
                концепцию оформления.
              </p>
            </div>
            <div className="info-step">
              <h3>02</h3>
              <p>
                Затем мы вместе с Вами выбираем из каталога ANTIKDECOR
                понравившиеся картины, гравюры, предметы интерьера.
              </p>
            </div>
            <div className="info-step">
              <h3>03</h3>
              <p>
                Мы доставляем выбранные предметы на объект (при необходимости
                переоформляем или меняем рамы и паспарту).
              </p>
            </div>
            <div className="info-step">
              <h3>04</h3>
              <p>
                После одобрения оформленного интерьера мы передаём Вам предметы
                и производим расчёт за покупку.
              </p>
            </div>
          </div>

          <div className="about__info_additional">
            <p>
              Данная услуга оказывается в{" "}
              <Link to="/contacts#map-moscow">
                <span>Москве</span>
              </Link>{" "}
              и{" "}
              <Link to="/contacts#map-petersburg">
                <span>Санкт-Петербурге </span>
              </Link>
              после заключения договора на оказание услуг. Заказчик оплачивает
              транспортные и иные расходы, связанные с транспортировкой
              крупногобаритной мебели и предметов интерьера.{" "}
            </p>
            <Link className="more_info" to="/designer">
              Подробнее
            </Link>
          </div>

          <div className="about__events">
            <VideosCarousel
              type="event"
              title={"Мероприятия в Гравюрном кабинете"}
            />
          </div>

          <div className="mySwiper">
            <Swiper
              className=""
              loop={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                768: {
                  spaceBetween: 15,
                },
              }}
              navigation={{
                prevEl: ".prev_btn_about",
                nextEl: ".next_btn_about",
              }}
              modules={[Navigation]}
            >
              {aboutData.map((el) => (
                <SwiperSlide key={el.id}>
                  <img src={el.img} alt={el.title} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="navigation_mobile">
              <button className="prev_btn prev_btn_about">
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
              <button className="next_btn next_btn_about">
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
          <div className="about__gallery">
            {aboutData.slice(0, 6).map((el) => (
              <div className={el.imgSize}>
                <img key={el.id} src={el.img} alt={el.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <VideosCarousel type="main" />
      <ReviewsCarousel />
    </div>
  );
}

export default About;
