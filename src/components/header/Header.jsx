import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./header.scss";
import logo from "../../assets/svg/antikdecor_logo_big.svg";
import envelope from "../../assets/svg/envelope.svg";
import basket from "../../assets/svg/basket.svg";
import locationSvg from "../../assets/svg/location.svg";
import Hamburger from "../hamburger/Hamburger";
import SeachMobile from "../searchMobile/SeachMobile";

function Header({ updateCart }) {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [tags, setTags] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showTags, setShowTags] = useState(false);

  function selectProduct() {
    setShowSearchResults(false);
    const input = document.querySelector(".search-input");
    input.value = "";
  }
  const [cartLength, setCartLength] = useState(0);

  const location = useLocation();
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    setCartLength(cartData ? cartData.length : 0);
  }, [updateCart]);

  return (
    <>
      <header className="header">
        <section className="section">
          <div className="container">
            <div className="header__top">
              <div className="header__top_left">
                <Hamburger show={showNav} func={setShowNav} theme="dark" />
                <Link to={"/"}>
                  <img
                    className="header__logo"
                    src={logo}
                    alt="antikdecor logo"
                  />
                </Link>
              </div>
              <div className="header__top_right">
                <div className="header__contacts ">
                  <div>
                    <a href="mailto:z@antikdecor.ru" className="header__email">
                      <img src={envelope} alt="envelope" />
                      <span>v@antikdecor.ru</span>
                    </a>
                    <a href="mailto:z@antikdecor.ru" className="header__email">
                      <img src={envelope} alt="envelope" />
                      <span>max@antikdecor.ru</span>
                    </a>
                  </div>
                  <div>
                    <a
                      target="blank"
                      href="https://yandex.uz/maps/org/antikdecor/96085923111/?ll=37.656952%2C55.759395&utm_medium=mapframe&utm_source=maps&z=14"
                      className="header__location"
                    >
                      <img src={locationSvg} alt="location" />
                      <span>Москва</span>
                    </a>

                    <a
                      target="blank"
                      href="https://yandex.ru/maps/org/antikdecor/1166577935/?utm_medium=mapframe&utm_source=maps"
                      className="header__location"
                    >
                      <img src={locationSvg} alt="location" />
                      <span>Санкт-Петербург</span>
                    </a>
                  </div>
                </div>
                <div className="header__filters">
                  <Link className="basket-icon" to="/cart">
                    <img src={basket} alt="basket" />
                    {cartLength > 0 && <span></span>}
                  </Link>
                  <span onClick={() => setShowSearch(!showSearch)}>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.4269 18.7743L13.1101 14.4575C9.74327 17.1112 4.89166 16.6809 2.04429 13.4763C-0.80307 10.2716 -0.659504 5.4031 2.37173 2.37181C5.40301 -0.65948 10.2716 -0.803104 13.4762 2.04426C16.6808 4.89162 17.1111 9.74324 14.4576 13.1101L18.7753 17.4269C19.095 17.807 19.0709 18.3685 18.7197 18.7197C18.3685 19.0709 17.807 19.095 17.4269 18.7753L17.4269 18.7743ZM1.90417 8.09498C1.90412 10.5844 3.39421 12.8314 5.68693 13.7999C7.97966 14.7683 10.6294 14.27 12.4137 12.5349C12.4319 12.5128 12.4513 12.4915 12.4717 12.4711C12.4927 12.4501 12.5138 12.4309 12.5358 12.4127C14.4816 10.4111 14.8475 7.35478 13.4291 4.95032C12.0107 2.5458 9.15885 1.3877 6.46562 2.12253C3.77239 2.85729 1.90382 5.30334 1.90312 8.09498H1.90417Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </div>

                <SeachMobile
                  showSearch={showSearch}
                  setShowSearch={setShowSearch}
                  showNav={showNav}
                  setShowNav={setShowNav}
                  theme="light"
                  setShowSearchResults={setShowSearchResults}
                  setSearchResults={setSearchResults}
                  setTags={setTags}
                  setShowTags={setShowTags}
                />
              </div>
            </div>
          </div>
        </section>
      </header>

      <div style={{ position: "sticky", top: 0, zIndex: 10 }}>
        <Navbar
          show={showNav}
          setShowNav={setShowNav}
          updateCart={updateCart}
        />
      </div>
      {showSearchResults && (
        <div className={`search-results ${showSearchResults && "open-search"}`}>
          {searchResults.map((el) => (
            <Link
              key={el.id}
              onClick={() => selectProduct()}
              to={`/products/${el.id}`}
            >
              <span>
                <img src={el.images[0]} alt="" />
              </span>
              <p>{el.name}</p>
            </Link>
          ))}
        </div>
      )}
      {showTags && (
        <div className="tags">
          {tags.map((tag) => (
            <Link key={tag.id} className="tag" to="/catalog/1" state={tag.id}>
              {tag.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
