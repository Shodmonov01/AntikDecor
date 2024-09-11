import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect } from "react";
import "./footer.scss";

import footerLogo from "../../assets/svg/antikdecor_logo_big.svg";

function Footer() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/contacts") {
      scroller.scrollTo(location.hash.replace("#", ""), {
        duration: 500,
        delay: 0,
        smooth: "easeIn",
      });
    }
  }, [location]);

  return (
    <footer className="footer">
      <section className="section">
        <div className="container">
          <nav className="footer-nav">
            <div className="footer-menu">
              <h3>Меню сайта</h3>
              <Link to="/">Главная</Link>
              <Link to="/catalog">Каталог</Link>
              <Link to="/news">Новости</Link>
              <Link to="/about">О нас</Link>
              <Link to="/contacts">Контакты</Link>
            </div>
            <div className="footer-catalog">
              <div>
                <h3>Каталог</h3>
                <Link to="/catalog/1">
                  Живопись графика <span>рисунок</span>
                </Link>
                <Link to="/catalog/10">Гравюры</Link>
                <Link to="/catalog/2">Винный антиквариат</Link>
                <Link to="/catalog/3">Бронза</Link>
                <Link to="/catalog/4">Рамы и Зеркала</Link>
                <Link to="/catalog/11">Осветительныe приборы</Link>
              </div>
              <div style={{ marginTop: "3.5rem" }}>
                <Link to="/catalog/5">Фарфор</Link>
                <Link to="/catalog/40">Cтекло</Link>
                <Link to="/catalog/6">Мебель </Link>
                <Link to="/catalog/7">Часы и научные приборы</Link>
                <Link to="/catalog/8">
                  Предметы антикварного <span>декора</span>
                </Link>
                <Link to="/catalog/9">Искуство востока</Link>
              </div>
            </div>
            <div className="footer-contacts">
              <h3>Контакты</h3>
              <Link to="/contacts#map-moscow" className="footer-location">
                <span>
                  <svg
                    width="16"
                    height="23"
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.82935 9.39199C1.82935 14.5904 6.37702 18.8893 8.38994 20.5374C8.67802 20.7733 8.82379 20.8927 9.03872 20.9532C9.20607 21.0003 9.45239 21.0003 9.61974 20.9532C9.83507 20.8926 9.97982 20.7744 10.269 20.5376C12.2819 18.8894 16.8293 14.5909 16.8293 9.39247C16.8293 7.42519 16.0392 5.53826 14.6327 4.14718C13.2261 2.75611 11.3186 1.97461 9.32948 1.97461C7.34034 1.97461 5.43259 2.75622 4.02606 4.1473C2.61953 5.53837 1.82935 7.42472 1.82935 9.39199Z"
                      stroke="#9b9b9b"
                      strokeWidth="2.14287"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.18652 8.40322C7.18652 9.58669 8.14591 10.5461 9.32939 10.5461C10.5129 10.5461 11.4723 9.58669 11.4723 8.40322C11.4723 7.21974 10.5129 6.26035 9.32939 6.26035C8.14591 6.26035 7.18652 7.21974 7.18652 8.40322Z"
                      stroke="#9b9b9b"
                      strokeWidth="2.14287"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="location-text">
                  <span>Москва</span>
                </div>
              </Link>
              <div className="footer-phone">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50246 2.77821C7.19873 2.0189 6.46332 1.521 5.64551 1.521H2.89474C1.8483 1.521 1 2.36909 1 3.41553C1 12.3102 8.21078 19.521 17.1055 19.521C18.1519 19.521 19 18.6726 19 17.6262L19.0005 14.875C19.0005 14.0571 18.5027 13.3219 17.7434 13.0181L15.1069 11.9639C14.4249 11.6911 13.6483 11.8139 13.0839 12.2842L12.4035 12.8517C11.6089 13.5139 10.4396 13.4612 9.7082 12.7298L7.79222 10.8121C7.06079 10.0806 7.00673 8.91233 7.66895 8.11768L8.23633 7.43729C8.70661 6.87295 8.83049 6.09616 8.55766 5.41409L7.50246 2.77821Z"
                      stroke="#9B9B9B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <a href="tel:+7(915)4865841">Владимир +7 915 486 5841</a>
                  <a href="tel:+7(919)9665430">Ольга +7 919 966 5430</a>
                </div>
              </div>
              <a href="mailto: v@antikdecor.ru" className="footer-email">
                <span>
                  <svg
                    width="18"
                    сд
                    height="14"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2.48145L8.10764 7.09371L8.10967 7.0954C8.78785 7.59273 9.12714 7.84154 9.49876 7.93766C9.82723 8.02262 10.1725 8.02262 10.501 7.93766C10.8729 7.84146 11.2132 7.59192 11.8926 7.09371C11.8926 7.09371 15.8101 4.08739 18 2.48145M1 12.2816V4.68164C1 3.56154 1 3.00107 1.21799 2.57324C1.40973 2.19692 1.71547 1.89118 2.0918 1.69943C2.51962 1.48145 3.08009 1.48145 4.2002 1.48145H15.8002C16.9203 1.48145 17.4796 1.48145 17.9074 1.69943C18.2837 1.89118 18.5905 2.19692 18.7822 2.57324C19 3.00065 19 3.56044 19 4.67836V12.285C19 13.4029 19 13.9619 18.7822 14.3893C18.5905 14.7657 18.2837 15.0719 17.9074 15.2637C17.48 15.4814 16.921 15.4814 15.8031 15.4814H4.19691C3.07899 15.4814 2.5192 15.4814 2.0918 15.2637C1.71547 15.0719 1.40973 14.7657 1.21799 14.3893C1 13.9615 1 13.4017 1 12.2816Z"
                      stroke="#9b9b9b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>v@antikdecor.ru</span>
              </a>
              <Link
                to="/contacts#map-petersburg"
                className="footer-location"
                style={{ marginTop: "1.5rem" }}
              >
                <span>
                  <svg
                    width="16"
                    height="23"
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.82935 9.39199C1.82935 14.5904 6.37702 18.8893 8.38994 20.5374C8.67802 20.7733 8.82379 20.8927 9.03872 20.9532C9.20607 21.0003 9.45239 21.0003 9.61974 20.9532C9.83507 20.8926 9.97982 20.7744 10.269 20.5376C12.2819 18.8894 16.8293 14.5909 16.8293 9.39247C16.8293 7.42519 16.0392 5.53826 14.6327 4.14718C13.2261 2.75611 11.3186 1.97461 9.32948 1.97461C7.34034 1.97461 5.43259 2.75622 4.02606 4.1473C2.61953 5.53837 1.82935 7.42472 1.82935 9.39199Z"
                      stroke="#9b9b9b"
                      strokeWidth="2.14287"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.18652 8.40322C7.18652 9.58669 8.14591 10.5461 9.32939 10.5461C10.5129 10.5461 11.4723 9.58669 11.4723 8.40322C11.4723 7.21974 10.5129 6.26035 9.32939 6.26035C8.14591 6.26035 7.18652 7.21974 7.18652 8.40322Z"
                      stroke="#9b9b9b"
                      strokeWidth="2.14287"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="location-text">
                  <span>Санкт-Петербург</span>
                </div>
              </Link>

              <div className="footer-phone">
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.50246 2.77821C7.19873 2.0189 6.46332 1.521 5.64551 1.521H2.89474C1.8483 1.521 1 2.36909 1 3.41553C1 12.3102 8.21078 19.521 17.1055 19.521C18.1519 19.521 19 18.6726 19 17.6262L19.0005 14.875C19.0005 14.0571 18.5027 13.3219 17.7434 13.0181L15.1069 11.9639C14.4249 11.6911 13.6483 11.8139 13.0839 12.2842L12.4035 12.8517C11.6089 13.5139 10.4396 13.4612 9.7082 12.7298L7.79222 10.8121C7.06079 10.0806 7.00673 8.91233 7.66895 8.11768L8.23633 7.43729C8.70661 6.87295 8.83049 6.09616 8.55766 5.41409L7.50246 2.77821Z"
                      stroke="#9B9B9B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <a href="tel:+7(911)7556793">Максим +7 911 755 6793</a>
                </div>
              </div>

              <a href="mailto: max@antikdecor.ru" className="footer-email">
                <span>
                  <svg
                    width="18"
                    сд
                    height="14"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2.48145L8.10764 7.09371L8.10967 7.0954C8.78785 7.59273 9.12714 7.84154 9.49876 7.93766C9.82723 8.02262 10.1725 8.02262 10.501 7.93766C10.8729 7.84146 11.2132 7.59192 11.8926 7.09371C11.8926 7.09371 15.8101 4.08739 18 2.48145M1 12.2816V4.68164C1 3.56154 1 3.00107 1.21799 2.57324C1.40973 2.19692 1.71547 1.89118 2.0918 1.69943C2.51962 1.48145 3.08009 1.48145 4.2002 1.48145H15.8002C16.9203 1.48145 17.4796 1.48145 17.9074 1.69943C18.2837 1.89118 18.5905 2.19692 18.7822 2.57324C19 3.00065 19 3.56044 19 4.67836V12.285C19 13.4029 19 13.9619 18.7822 14.3893C18.5905 14.7657 18.2837 15.0719 17.9074 15.2637C17.48 15.4814 16.921 15.4814 15.8031 15.4814H4.19691C3.07899 15.4814 2.5192 15.4814 2.0918 15.2637C1.71547 15.0719 1.40973 14.7657 1.21799 14.3893C1 13.9615 1 13.4017 1 12.2816Z"
                      stroke="#9b9b9b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>max@antikdecor.ru</span>
              </a>
            </div>
          </nav>
          <div className="footer_bottom_wrapper">
            <div className="footer_bottom">
              <Link className="footer_logo" to="/">
                <img src={footerLogo} alt="logo antikdecor" />
              </Link>
              <Link to={"/privacy-policy"}>Политика конфиденциальности</Link>
            </div>
            <div className="footer_bottom">
              <ul>
                <li>ИП Гордеев Владимир Вячеславович </li>
                <li>ИНН 772765103021</li>
                <li>ОГРН 307770000299527</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
