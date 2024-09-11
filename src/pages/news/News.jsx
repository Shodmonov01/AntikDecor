import "./news.scss";
import NewsGrid from "../../components/newsGrid/NewsGrid";
import SEO from "../../components/SEO/SEO";
import { useEffect } from "react";

function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="news">
      <SEO />
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Новости</h2>
        </div>
      </section>
      <NewsGrid />
    </div>
  );
}

export default News;
