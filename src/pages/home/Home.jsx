import ReviewsCarousel from "../../components/reviewsCarousel/ReviewsCarousel";
import SEO from "../../components/SEO/SEO";
import VideosCarousel from "../../components/videosCarousel/VideosCarousel";
import Home3dTur from "./components/home.3dtur/Home3dTur";
import HomeAbout from "./components/home.about/HomeAbout";
import HomeCatalog from "./components/home.catalog/HomeCatalog";
import HomeExperts from "./components/home.experts/HomeExperts";
import HomeInfo from "./components/home.info/HomeInfo";
import HomeNewProducts from "./components/home.new.products/HomeNewProducts";
import HomeNews from "./components/home.news/HomeNews";
import HomeWelcome from "./components/home.welcome/HomeWelcome";
import data from "../../data.json";
import "./home.scss";
import { useEffect } from "react";
const metaData = data.metadata;

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <HomeWelcome />
      <HomeCatalog />
      <HomeAbout />
      <HomeNewProducts />
      <HomeExperts />
      <HomeInfo />
      <Home3dTur />
      <HomeNews />
      <VideosCarousel type="event" title={"Мероприятия"} />
      <ReviewsCarousel />
    </div>
  );
}

export default Home;
