import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import Accordion from "../../components/accordion/Accordion";
import { getData } from "../../utils";
import "./products.scss";
import filter from "../../assets/svg/filter.svg";
import SEO from "../../components/SEO/SEO";
import GenreCard from "../../components/genreCard/genreCard";

function Products() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const page = queryParams.get("page") || 1;
  const [filters, setFilters] = useState({});
  const [sidebar, setSidebar] = useState({});
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [openFilterBtn, setOpenFilterBtn] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [genres, setGenres] = useState([]);
  const [genresShow, setGenresShow] = useState(false);
  const [pageCount, setPageCount] = useState(12);
  const [currentPage, setCurrentPage] = useState(Number(page));

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    const savedProductId = sessionStorage.getItem("selectedProductId");
    if (savedScrollPosition && savedProductId) {
      const productElement = document.getElementById(savedProductId);
      if (productElement) {
        productElement.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollPosition");
        sessionStorage.removeItem("selectedProductId");
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
  }, []);

  useEffect(() => {
    async function getFilters(url) {
      const data = await getData(url);
      setFilters(data);
    }
    getFilters(`category/${id}/`);
  }, [id]);

  useEffect(() => {
    const updatePageCount = () => {
      if (window.innerWidth >= 920) {
        setPageCount(24);
      }
    };
    updatePageCount();
    window.addEventListener("resize", updatePageCount);

    return () => {
      window.removeEventListener("resize", updatePageCount);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    async function getSidebar(url) {
      const data = await getData(url);
      setSidebar(data);
      const genres = data?.data?.filter((item) => item?.name === "Жанры");
      if (
        (filters?.name === "ГРАВЮРЫ" && !search) ||
        (filters?.name === "ФАРФОР" && !search) ||
        (filters?.name === "ЖИВОПИСЬ ГРАФИКА РИСУНОК" && !search)
      ) {
        setGenres(genres[0]?.subcategories);
        setGenresShow(true);
      } else {
        setGenresShow(false);
      }
    }
    getSidebar(`category/${id}/sidebar/`);
  }, [id, filters, search]);

  useEffect(() => {
    const getDataProducts = async () => {
      const data = await getData(
        `products/?category_id=${id}&count=${pageCount}&${
          search && "&" + search.replace("?", "")
        }`
      );
      setProducts(data?.results);
      setTotalPage(Math.ceil(data?.count / 24));
    };
    getDataProducts();
  }, [search, id, page, pageCount]);

  async function getSidebarLinks(catId) {
    const data = await getData(`category/${catId !== 0 ? catId : id}/sidebar`);
    setSidebar(data);
  }

  function filterSubCategory(n, catId) {
    const categories = document.querySelectorAll(".filter");
    categories.forEach((el, index) => {
      el.classList.remove("filter__active");
      if (n === index) el.classList.add("filter__active");
    });
    setCategoryId(catId);
    getSidebarLinks(catId);
  }

  const topFilters = [
    ...[{ id: 0, name: "Все работы" }],
    ...(filters?.subcategories || []),
  ];

  const loadMoreProducts = async (newPage) => {
    try {
      setCurrentPage(newPage);
      console.log(search);
      const data = await getData(
        `products/?category_id=${id}&count=${pageCount}&page=${newPage}${
          search && "&" + search.replace("?", "")
        }`
      );
      if (Array.isArray(data?.results)) {
        setProducts((prevData) => [...prevData, ...data?.results]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  function openMobileFilters() {
    setOpenFilterBtn(!openFilterBtn);
  }

  const handleProductClick = (productId) => {
    sessionStorage.setItem("selectedProductId", productId);
  };

  return (
    <div className="products">
      <SEO title={filters?.name} description={filters?.description} />
      <section className="section">
        <div className="container">
          <h2 className="subtitle">{filters?.name}</h2>
          <div className="filters-wrapper">
            <div className="filters">
              {topFilters.map((el, index) => (
                <span
                  onClick={() => filterSubCategory(index, el.id)}
                  key={el.id}
                  className={`filter ${index === 0 && "filter__active"}`}
                >
                  {el.name}
                </span>
              ))}
            </div>
            <div className="filters__btn">
              <div onClick={openMobileFilters} className="filters__btn_head">
                <span>Все фильтры</span>
                <span>
                  <img src={filter} alt="filter" />
                </span>
              </div>
              <div
                className={`filter__btn_accordion ${
                  openFilterBtn && "filter__btn_accordion--open"
                }`}
              >
                {sidebar?.data?.map((accordion) => (
                  <Accordion
                    key={accordion.id}
                    acc={accordion}
                    setProducts={setProducts}
                    categoryId={categoryId}
                    catalogId={id}
                    setOpenFilterBtn={setOpenFilterBtn}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="products__layout">
            <div className="filters__large">
              {sidebar?.data?.map((accordion) => (
                <Accordion
                  key={accordion.id}
                  acc={accordion}
                  setProducts={setProducts}
                  categoryId={categoryId}
                  catalogId={id}
                />
              ))}
            </div>
            <div className="products__grid">
              {!genresShow
                ? products?.map((product) => (
                    <Link
                      key={product.id}
                      to={`/catalog/${id}/${product.id}`}
                      onClick={() => handleProductClick(product.id)}
                    >
                      <ProductCard
                        key={product.id}
                        el={product}
                        id={`product-${product.id}`}
                      />
                    </Link>
                  ))
                : genres?.map((product) => (
                    <Link
                      key={product.id}
                      to={`?sidebar_id=${product.id}`}
                      onClick={() => setGenresShow(false)}
                    >
                      <GenreCard key={product.id} el={product} />
                    </Link>
                  ))}
            </div>
          </div>
          {!genresShow ? (
            <div className="pagination">
              <button
                className="load-more"
                disabled={currentPage >= totalPage}
                onClick={() => loadMoreProducts(currentPage + 1)}
              >
                Загрузить больше
              </button>
            </div>
          ) : null}

          <div className="catalog__navigations">
            <button
              className="navigation-btn"
              onClick={() => {
                window.scrollTo({
                  top: window.scrollY - window.innerHeight,
                });
              }}
            >
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.787 9.473s-4.505-4.502-6.259-6.255c-.147-.146-.339-.22-.53-.22-.192 0-.384.074-.531.22-1.753 1.753-6.256 6.252-6.256 6.252-.147.147-.219.339-.217.532.001.19.075.38.221.525.292.293.766.295 1.056.004l4.977-4.976v14.692c0 .414.336.75.75.75.413 0 .75-.336.75-.75v-14.692l4.978 4.978c.289.29.762.287 1.055-.006.145-.145.219-.335.221-.525.002-.192-.07-.384-.215-.529z"
                  fillRule="nonzero"
                />
              </svg>
            </button>
            <button
              className="navigation-btn"
              onClick={navigate.bind(null, -1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
