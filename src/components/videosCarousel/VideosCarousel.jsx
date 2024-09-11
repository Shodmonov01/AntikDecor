import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useInView } from "react-intersection-observer";

import "./videos.carousel.scss";
import "swiper/css";

import { getData } from "../../utils";

function VideosCarousel({ type, title }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos(url) {
      const data = await getData(url);
      setVideos(data);
    }

    getVideos("videos/");
  }, []);

  function changeUrl(url) {
    const isVideo = url.indexOf("watch") > 0;
    const isShort = url.indexOf("short") > 0;
    let readyUrl = url;

    if (isVideo) {
      const index = url.indexOf("&");
      if (index > 0) {
        const a = url.slice(0, index);
        return (readyUrl = a.replace(
          "youtube.com/watch?v=",
          "youtube.com/embed/"
        ));
      } else {
        return (readyUrl = url.replace(
          "youtube.com/watch?v=",
          "youtube.com/embed/"
        ));
      }
    } else if (isShort) {
      const index = url.indexOf("&");
      if (index > 0) {
        const a = url.slice(0, index);
        return (readyUrl = a.replace(
          "youtube.com/shorts",
          "youtube.com/embed"
        ));
      } else {
        return (readyUrl = url.replace(
          "youtube.com/shorts",
          "youtube.com/embed"
        ));
      }
    }

    return readyUrl;
  }

  return (
    <div ref={ref} className="videos-carousel">
      <section className="section">
        <div className="container">
          <h2 className="subtitle">{title || "Видео"}</h2>
          {inView ? (
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                prevEl: ".prev_btn_video",
                nextEl: ".next_btn_video",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1440: {
                  slidesPerView: 2,
                },
              }}
            >
              {videos
                ?.filter((video) => video.type === type)
                .map((el) => (
                  <SwiperSlide key={el.url}>
                    <iframe
                      src={changeUrl(el.url)}
                      title="video"
                      aallow="autoplay;"
                      width="100%"
                      height="100%"
                    >
                      video
                    </iframe>
                  </SwiperSlide>
                ))}
            </Swiper>
          ) : null}

          <div className="navigation_mobile">
            <button className="prev_btn prev_btn_video">
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
            <button className="next_btn next_btn_video">
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

export default VideosCarousel;
