import { Link } from "react-router-dom";
import NewsCarousel from "../../../../components/newsCarousel/NewsCarousel";
import "./home.news.scss";

function HomeNews() {
  return (
    <div className="home-news">
      <section className="section">
        
        <div className="container">
          <h2 className="subtitle">Блог с экспертами</h2>
        </div>
      </section>
      <NewsCarousel />
    </div>
  );
}

export default HomeNews;
