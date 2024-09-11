import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getData } from "../../../utils";
import NewsGrid from "../../../components/newsGrid/NewsGrid";
import "./newsDetail.scss";

function NewsDetail() {
  const [news, setNews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getNews(url) {
      const res = await getData(url);
      setNews(res);
    }

    getNews(`news/${id}/`);
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-detail">
      <section className="section">
        <div className="container">
          <div className="selected-news">
            <div className="selected-news__content">
              <span>{news.date}</span>
              <h1 className="subtitle">{news.title}</h1>
              <div
                className="news__desc"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
            <div className="selected-news__img">
              <img src={news.image} alt="" />
              <h2>{news.imgCaption}</h2>
            </div>
          </div>

          <h2 className="subtitle">другие Новости</h2>
          <NewsGrid />
        </div>
      </section>
    </div>
  );
}

export default NewsDetail;
