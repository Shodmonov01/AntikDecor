import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";
import smallLogo from "../../../../assets/svg/antikdecor_logo_small.svg";
import exit from "../../../../assets/svg/exit.svg";
import { getData } from "../../../../utils";
import basket from "../../../../assets/svg/basket.svg";

function Navbar({ show, setShowNav, updateCart }) {
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const [showAccordionBody1, setShowAccordionBody1] = useState(false);
  const [showAccordionBody2, setShowAccordionBody2] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [tags, setTags] = useState([]);
  const [showTags, setShowTags] = useState(false);
  async function handleSearch(e) {
    const inputVal = e.target.value;
    const searchData = await getData(`products/?search=${inputVal}`);
    setSearchResults(searchData.results);

    if (inputVal) {
      setShowSearchResults(true);
      setShowTags(false);
    } else {
      setShowSearchResults(false);
      setShowTags(true);
    }
  }

  const [cartLength, setCartLength] = useState(0);

  const location = useLocation();
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    setCartLength(cartData ? cartData.length : 0);
  }, [updateCart]);

  async function handleFocus(e) {
    const value = e.target.value;
    const data = await getData("filters");
    setTags(data);
    if (!value) {
      setShowTags(true);
    }
  }

  function selectProduct() {
    setShowSearchResults(false);
    const input = document.querySelector(".search-input--large");
    input.value = "";
  }

  function changeActiveLink(n) {
    setShowSearchResults(false);

    const input = document.querySelector(".search-input--large");
    input.value = "";
  }

  function selectSubCat() {
    setShowNav(false);
    setShowCategories(false);
  }

  function openCategories() {
    setShowCategories(true);
  }
  return (
    <div>
      <nav className={`header__nav ${show && "open-nav"}`}>
        <section className="section">
          <div className="container">
            <div className="header__nav_large">
              <div className="nav__links">
                {[
                  { name: "Главная", link: "/" },
                  { name: "Каталог", link: "" },
                  { name: "Новости", link: "/news" },
                  { name: "О нас", link: "/about" },
                  { name: "Контакты", link: "/contacts" },
                ].map((el, index) => {
                  if (el.link) {
                    return (
                      <NavLink
                        key={index}
                        onClick={() => changeActiveLink(index, el.name)}
                        className={({ isActive }) =>
                          `nav-link ${isActive && "active-link"}`
                        }
                        to={el.link}
                      >
                        {el.name}
                      </NavLink>
                    );
                  } else {
                    return (
                      <NavLink
                        key={index}
                        onMouseOver={() => openCategories(el.name)}
                        onClick={() => changeActiveLink(index, el.name)}
                        onMouseLeave={() => setShowCategories(false)}
                        to="/catalog"
                        className={({ isActive }) =>
                          `nav-link ${isActive && "active-link"} catalog-link`
                        }
                      >
                        {el.name}
                      </NavLink>
                    );
                  }
                })}
              </div>
              <div className="nav__filter">
                <div>
                  <input
                    onFocus={handleFocus}
                    onBlur={() => {
                      setTimeout(() => {
                        setShowTags(false);
                      }, 200);
                    }}
                    onChange={(e) => handleSearch(e)}
                    type="text"
                    placeholder="Поиск по каталогу"
                    className="search-input--large"
                  />
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="header__search"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.4269 18.7743L13.1101 14.4575C9.74327 17.1112 4.89166 16.6809 2.04429 13.4763C-0.80307 10.2716 -0.659504 5.4031 2.37173 2.37181C5.40301 -0.65948 10.2716 -0.803104 13.4762 2.04426C16.6808 4.89162 17.1111 9.74324 14.4576 13.1101L18.7753 17.4269C19.095 17.807 19.0709 18.3685 18.7197 18.7197C18.3685 19.0709 17.807 19.095 17.4269 18.7753L17.4269 18.7743ZM1.90417 8.09498C1.90412 10.5844 3.39421 12.8314 5.68693 13.7999C7.97966 14.7683 10.6294 14.27 12.4137 12.5349C12.4319 12.5128 12.4513 12.4915 12.4717 12.4711C12.4927 12.4501 12.5138 12.4309 12.5358 12.4127C14.4816 10.4111 14.8475 7.35478 13.4291 4.95032C12.0107 2.5458 9.15885 1.3877 6.46562 2.12253C3.77239 2.85729 1.90382 5.30334 1.90312 8.09498H1.90417Z"
                      fill="#EA5544"
                    />
                  </svg>
                </div>
                <a
                  className="whatsapp"
                  href="https://api.whatsapp.com/send?phone=79154865841"
                >
                  Написать в WhatsApp
                </a>
                <Link
                  className={`basket-icon ${
                    location.pathname === "/cart" && "cart-page"
                  }`}
                  to="/cart"
                >
                  <img src={basket} alt="" />
                  {cartLength > 0 && <span></span>}
                </Link>
              </div>
            </div>
            <div
              className={`search-results ${showSearchResults && "open-search"}`}
            >
              {searchResults?.map((el) => (
                <Link
                  onClick={() => selectProduct(el.name)}
                  to={`/products/${el.id}`}
                >
                  <span>
                    <img src={el.images[0]} alt="" />
                  </span>
                  <p>{el.name}</p>
                </Link>
              ))}
            </div>
            {showTags && (
              <div className="tags">
                {tags.map((tag) => (
                  <Link
                    key={tag.id}
                    className="tag"
                    to="/catalog/1"
                    state={tag.id}
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="header__nav_small">
          <div className="nav_small_top">
            <Link onClick={() => setShowNav(!show)} to={"/"}>
              <img src={smallLogo} alt="antikdecor logo" />
            </Link>
            <img onClick={() => setShowNav(!show)} src={exit} alt="cross" />
          </div>

          <div className="nav_small_links">
            <Link onClick={() => setShowNav(!show)} to="/">
              Главная
            </Link>
            <div className="nav__accordion">
              <div
                onClick={() => setShowMobileCategories(!showMobileCategories)}
                className={`accordion-title ${
                  showMobileCategories && "selected-title"
                }`}
              >
                <span>Каталог</span>
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="nav__caret"
                    d="M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988"
                    stroke="#ea5544"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`accordion-body ${
                  showMobileCategories && "show-accordion-body"
                }`}
              >
                <div>
                  <div>
                    <div
                      className={`accordion-title ${
                        showAccordionBody1 && "selected-subtitle"
                      }`}
                      onClick={() => setShowAccordionBody1(!showAccordionBody1)}
                    >
                      <span>Живопись, графика</span>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="nav__caret"
                          d="M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988"
                          stroke="#ea5544"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {showAccordionBody1 && (
                      <div className="sub-body">
                        <Link
                          to="catalog/1?sidebar_id=70"
                          onClick={() => selectSubCat()}
                          state="1"
                        >
                          Российская
                        </Link>
                        <Link
                          to="catalog/1?sidebar_id=45"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Европейская
                        </Link>
                      </div>
                    )}
                  </div>

                  <div>
                    <div
                      className={`accordion-title ${
                        showAccordionBody2 && "selected-subtitle"
                      }`}
                      onClick={() => setShowAccordionBody2(!showAccordionBody2)}
                    >
                      <span>Гравюры, литографии</span>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="nav__caret"
                          d="M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988"
                          stroke="#ea5544"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {showAccordionBody2 && (
                      <div className="sub-body">
                        <Link
                          to="catalog/1/?sidebar_id=56"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Анималистика
                        </Link>
                        <Link
                          to="catalog/10/?sidebar_id=43"
                          // to="catalog/1/?sidebar_id=43"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Ботаника
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=65"
                          // to="catalog/10/?sidebar_id=65"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Бытовые и жанровые сцены
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=48"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Архитектура, виды городов
                        </Link>
                        <Link
                          to="catalog/1?sidebar_id=50"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Батальный жанр
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=69"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Модные гравюры
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=63"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Портрет
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=68"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Географические карты и планы
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=52"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Морская тема
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=59"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Дети
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=55"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Религиозные сюжеты
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=46"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Мифология
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=64"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Пейзаж
                        </Link>
                        <Link
                          to="catalog/1/?sidebar_id=51"
                          state="2"
                          onClick={() => selectSubCat()}
                        >
                          Спорт, Охота, Рыбалка
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link onClick={() => setShowNav(!show)} to="catalog/40">
                    Стекло
                  </Link>
                  <Link onClick={() => setShowNav(!show)} to="catalog/3">
                    Бронза
                  </Link>
                  <Link onClick={() => setShowNav(!show)} to="catalog/6">
                    Мебель
                  </Link>
                  <Link onClick={() => setShowNav(!show)} to="catalog/82">
                    Cтоловые приборы и посуда
                  </Link>
                  <Link onClick={() => setShowNav(!show)} to="catalog/9">
                    Искусство Востока, Африки и Азии
                  </Link>
                  <Link onClick={() => setShowNav(!show)} to="catalog/5">
                    Фарфор
                  </Link>
                  <Link onClick={() => setShowNav(!show)} to="catalog/80">
                    Осветительные приборы
                  </Link>
                  <Link onClick={() => setShowNav(!show)} to="catalog/8">
                    Предметы антикварного декора
                  </Link>

                  <Link onClick={() => setShowNav(!show)} to="catalog/4">
                    Рамы и Зеркала
                  </Link>
                  <Link onClick={() => setShowNav(!show)} to="catalog/7">
                    Часы и научные приборы
                  </Link>
                </div>
              </div>
            </div>

            <Link onClick={() => setShowNav(!show)} to="/news">
              Новости
            </Link>
            <Link onClick={() => setShowNav(!show)} to="/about">
              О нас
            </Link>
            <Link onClick={() => setShowNav(!show)} to="/contacts">
              Контакты
            </Link>
          </div>

          <div className="nav_small_contacts">
            <div className="nav_small_contacts-img-wrapper">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50246 2.77821C7.19873 2.0189 6.46332 1.521 5.64551 1.521H2.89474C1.8483 1.521 1 2.36909 1 3.41553C1 12.3102 8.21078 19.521 17.1055 19.521C18.1519 19.521 19 18.6726 19 17.6262L19.0005 14.875C19.0005 14.0571 18.5027 13.3219 17.7434 13.0181L15.1069 11.9639C14.4249 11.6911 13.6483 11.8139 13.0839 12.2842L12.4035 12.8517C11.6089 13.5139 10.4396 13.4612 9.7082 12.7298L7.79222 10.8121C7.06079 10.0806 7.00673 8.91233 7.66895 8.11768L8.23633 7.43729C8.70661 6.87295 8.83049 6.09616 8.55766 5.41409L7.50246 2.77821Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="nav_small_phones">
              <a href="tel:+7(919)9665430">
                +7 (919) 966 5430 <span>(Ольга)</span>
              </a>
              <a href="tel:+7(915)4865841">
                +7 (915) 486 5841 <span>(Владимир)</span>
              </a>
            </div>
          </div>
          <a
            className="nav_small_btn"
            href="https://api.whatsapp.com/send?phone=79154865841"
          >
            Написать в WhatsApp
          </a>
          {/* <Link
            className={`basket-icon ${
              location.pathname === "/cart" && "cart-page"
            }`}
            to="/cart"
          >
            <img src={basket} alt="" />
            {cartLength > 0 && <span>{cartLength}</span>}
          </Link> */}
        </div>
      </nav>
      {showCategories && (
        <div className="nav__catalog">
          <div
            className="catalog-wrapper"
            onMouseLeave={() => setShowCategories(false)}
            onMouseEnter={() => setShowCategories(true)}
          >
            <div class="catalog__inner">
              <div className="nav__catalog-column">
                <h5 className="nav__catalog-title">
                  <Link to={"catalog/1"}>Живопись, графика</Link>
                </h5>
                <Link
                  className="catalog-subcategories"
                  to="catalog/1?sidebar_id=70"
                  state="1"
                >
                  Российская
                </Link>
                <Link
                  className="catalog-subcategories"
                  to="catalog/1?sidebar_id=45"
                  state="2"
                >
                  Европейская
                </Link>
              </div>
              <div className="nav__catalog-column">
                <h5 className="nav__catalog-title">
                  <Link to={"catalog/10"}>Гравюры, литографии</Link>
                </h5>
                <Link
                  className="catalog-subcategories"
                  to="catalog/10?sidebar_id=56"
                  state="3"
                >
                  Анималистика
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="4"
                  to="catalog/10?sidebar_id=43"
                >
                  Ботаника
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="5"
                  to="catalog/10?sidebar_id=65"
                >
                  Бытовые и жанровые сцены
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="6"
                  to="catalog/10?sidebar_id=48"
                >
                  Архитектура, виды городов
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="7"
                  to="catalog/10?sidebar_id=50"
                >
                  Батальный жанр
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="8"
                  to="catalog/10?sidebar_id=69"
                >
                  Модные гравюры
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="9"
                  to="catalog/10?sidebar_id=63"
                >
                  Портрет
                </Link>
              </div>
              <div className="nav__catalog-column">
                <Link
                  className="catalog-subcategories"
                  state="10"
                  to="catalog/10?sidebar_id=68"
                >
                  Географические карты и планы
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="11"
                  to="catalog/10?sidebar_id=52"
                >
                  Морская тема
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="12"
                  to="catalog/10?sidebar_id=59"
                >
                  Дети
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="13"
                  to="catalog/10?sidebar_id=55"
                >
                  Религиозные сюжеты
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="14"
                  to="catalog/10?sidebar_id=46"
                >
                  Мифология
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="15"
                  to="catalog/10?sidebar_id=64"
                >
                  Пейзаж
                </Link>
                <Link
                  className="catalog-subcategories"
                  state="16"
                  to="catalog/10?sidebar_id=51"
                >
                  Спорт, Охота, Рыбалка
                </Link>
              </div>
              <div className="nav__catalog-column">
                <Link className="catalog-categories" to="catalog/40">
                  Стекло
                </Link>
                <Link className="catalog-categories" to="catalog/3">
                  Бронза
                </Link>
                <Link className="catalog-categories" to="catalog/6">
                  Мебель
                </Link>
                <Link className="catalog-categories" to="catalog/82">
                  Cтоловые приборы и посуда
                </Link>
                <Link className="catalog-categories" to="catalog/9">
                  Искусство Востока,<br></br> Африки и Азии
                </Link>
              </div>
              <div className="nav__catalog-column">
                <Link className="catalog-categories" to="catalog/5">
                  Фарфор
                </Link>
                <Link className="catalog-categories" to="catalog/80">
                  Осветительные приборы
                </Link>
                <Link className="catalog-categories" to="catalog/8">
                  Предметы антикварного декора
                </Link>
                <Link className="catalog-categories" to="catalog/4">
                  Рамы и Зеркала
                </Link>
                <Link className="catalog-categories" to="catalog/7">
                  Часы и научные приборы
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
