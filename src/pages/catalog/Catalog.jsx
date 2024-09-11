import "./catalog.scss";
import CatalogGrid from "../../components/catalogGrid/CatalogGrid";
import SEO from "../../components/SEO/SEO";
import data from "../../data.json";
import { useEffect } from "react";
const metaData = data.metadata;

function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="catalog">
      <SEO
        title={metaData.catalog.title}
        description={metaData.catalog.description}
      />
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Каталог</h2>
          <div>
            <CatalogGrid />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalog;
