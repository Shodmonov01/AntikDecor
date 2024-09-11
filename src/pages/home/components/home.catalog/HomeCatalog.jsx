import "swiper/css";
import "./home.catalog.scss";

import CatalogGrid from "../../../../components/catalogGrid/CatalogGrid";

function HomeCatalog() {
  return (
    <div id="homeCatalog" className="home-catalog">
      <section className="section">
        <div className="container">
          <div>
            <h2 className="subtitle">Каталог</h2>
          </div>
          <CatalogGrid />
        </div>
      </section>
    </div>
  );
}

export default HomeCatalog;
