import "./home.experts.scss";

import { useEffect, useState } from "react";
import { getData } from "../../../../utils";
import ExpertCard from "./ExpertCard";

function HomeExperts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getExperts("experts/");
  }, []);

  async function getExperts(url) {
    const res = await getData(url);
    setData(res);
  }

  return (
    <div className="home-experts">
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Эксперты</h2>
          <div className="experts__cards">
            {data?.map((el, index) => (
              <ExpertCard key={index} data={el} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeExperts;
