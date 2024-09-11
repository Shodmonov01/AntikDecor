import "./contacts.scss";
import clock from "../../assets/svg/clock.svg";
import phone from "../../assets/svg/phone_white.svg";
import email from "../../assets/svg/envelope.svg";
import ContactUs from "../../components/contactUs/ContactUs";
import SEO from "../../components/SEO/SEO";
import data from "../../data.json";
import { useEffect } from "react";

const metaData = data.metadata;

function Contacts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contacts">
      <SEO
        title={metaData.contact.title}
        description={metaData.contact.description}
      />
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Контакты</h2>
          <div className="contacts__moscow">
            <h3>Москва</h3>

            <div className="contacts__cols">
              <div className="first-col">
                <a href="tel:+79199665430" className="contact">
                  <span>
                    <img src={phone} alt="phone" />
                  </span>
                  <p>
                    +7 (919) 966 5430 <span>(Ольга)</span>
                  </p>
                </a>
                <a href="mailto:Z@Antikdecor.ru" className="contact">
                  <span>
                    <img src={email} alt="envelope" />
                  </span>
                  <p>Z@Antikdecor.ru</p>
                </a>
              </div>
              <div className="second-col">
                <a href="tel:+79154865841" className="contact">
                  <span>
                    <img src={phone} alt="phone" />
                  </span>
                  <p>
                    +7 (915) 486 5841 <span>(Владимир)</span>
                  </p>
                </a>
                <a href="mailto:V@Antikdecor.ru" className="contact">
                  <span>
                    <img src={email} alt="envelope" />
                  </span>
                  <p>V@Antikdecor.ru</p>
                </a>
              </div>
              <div className="third-col" id="map-moscow">
                <div className="contact">
                  <span>
                    <img src={clock} alt="" />
                  </span>
                  <p>Часы работы</p>
                </div>
                <div>
                  <p>понедельник - пятница с 10:00 до 19:00</p>
                  <p>
                    суббота, воскресенье - по предварительной договорённости
                  </p>
                </div>
              </div>
            </div>

            <address>
              <div>
                <h4>Гравюрный кабинет ANTIKDECOR:</h4>
                <p>ул. Земляной Вал, дом 18-22, строение 1 (вход</p>
                <p>со стороны Яковоапостольского переулка)</p>
              </div>
              <div
                className="map"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <a
                  href="https://yandex.ru/maps/org/antikdecor/96085923111/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "0px",
                  }}
                >
                  Antikdecor
                </a>
                <a
                  href="https://yandex.ru/maps/213/moscow/category/antique_store/184107981/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "14px",
                  }}
                >
                  Антикварный магазин в Москве
                </a>
                <a
                  href="https://yandex.ru/maps/213/moscow/category/gift_and_souvenir_shop/184108001/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "28px",
                  }}
                >
                  Магазин подарков и сувениров в Санкт‑Петербурге
                </a>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.657116%2C55.759517&mode=search&oid=96085923111&ol=biz&z=16.67"
                  title="map"
                  width={560}
                  height={400}
                  frameborder={1}
                  allowfullscreen="true"
                  style={{ position: "relative" }}
                ></iframe>
              </div>
            </address>
          </div>
          <div className="contacts__petersburg">
            <h3>САНКТ-ПЕТЕРБУРГ</h3>

            <div className="contacts__cols">
              <div className="contacts__first_col">
                <a href="tel:+79117556793" className="contact">
                  <span>
                    <img src={phone} alt="phone" />
                  </span>
                  <p>+7 (911) 755 6793 (Максим)</p>
                </a>
                <a href="mailto:max@antikdecor.ru" className="contact">
                  <span>
                    <img src={email} alt="envelope" />
                  </span>
                  <p>max@antikdecor.ru</p>
                </a>
              </div>
              <div className="contacts__second_col" id="map-petersburg">
                <div className="contact">
                  <span>
                    <img src={clock} alt="clock" />
                  </span>
                  <p>Часы работы</p>
                </div>
                <div>
                  <p>понедельник - пятница с 10:00 до 19:00</p>
                  <p>
                    суббота, воскресенье - по предварительной договорённости
                  </p>
                </div>
              </div>
            </div>

            <address>
              <div>
                <h4>Салон-магазин ANTIKDECOR:</h4>
                <p>ул. Кавалергардская, дом 12</p>
              </div>
              <div
                className="map"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <a
                  href="https://yandex.ru/maps/org/antikdecor/1166577935/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "0px",
                  }}
                >
                  Antikdecor
                </a>
                <a
                  href="https://yandex.ru/maps/2/saint-petersburg/category/antique_store/184107981/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "14px",
                  }}
                >
                  Антикварный магазин в Санкт‑Петербурге
                </a>
                <a
                  href="https://yandex.ru/maps/2/saint-petersburg/category/gift_and_souvenir_shop/184108001/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "28px",
                  }}
                >
                  Магазин подарков и сувениров в Санкт‑Петербурге
                </a>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=30.382325%2C59.944481&mode=search&oid=1166577935&ol=biz&z=16.67"
                  title="map"
                  width={560}
                  height={400}
                  allowfullscreen="true"
                  style={{ position: "relative" }}
                ></iframe>
              </div>
            </address>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
}

export default Contacts;
