import { useEffect, useState } from "react";
import "./accordion.scss";
import { getData } from "../../utils";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SubAccordion from "./SubAccordion";

function Accordion({
  acc,
  setProducts,
  categoryId,
  catalogId,
  setNextLink,
  setOpenFilterBtn,
}) {
  const { name, subcategories } = acc;
  const [accordionOpen, isAccordionOpen] = useState(true);
  const [isTretyCategoryId, setIsTretyCategoryId] = useState(null);
  const { subCatId } = useSelector((state) => state.subCatId);
  const { catId } = useSelector((state) => state.catId);

  const location = useLocation();
  categoryId = categoryId || catalogId;

  async function selectSidebarCart(id) {
    setIsTretyCategoryId(id);
    const sidebarSubcategories = document.querySelectorAll(
      ".sidebar-subcategory"
    );

    sidebarSubcategories.forEach((el) => {
      el.classList.remove("active-sidebar-subcategory");
      if (+el.dataset.sidebar === id) {
        el.classList.add("active-sidebar-subcategory");
      }
    });

    const data = await getData(
      `products/?category_id=${categoryId}&sidebar_id=${id}`
    );
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setProducts(data?.results);

    if (setOpenFilterBtn) {
      setOpenFilterBtn(false);
    }
  }

  async function selectSidebarCartFromDropdown() {
    const sidebarSubcategories = document.querySelectorAll(
      ".sidebar-subcategory"
    );

    sidebarSubcategories.forEach((el) => {
      el.classList.remove("active-sidebar-subcategory");
      if (+el.dataset.sidebar === subCatId) {
        el.classList.add("active-sidebar-subcategory");
      }
    });

    if (setOpenFilterBtn) {
      setOpenFilterBtn(false);
    }
  }

  useEffect(() => {
    if (catId && subCatId) {
      selectSidebarCartFromDropdown();
    }
  }, [location.state]);

  return (
    <div className="accordion">
      <div
        onClick={() => isAccordionOpen(!accordionOpen)}
        className={`accordion__head ${
          accordionOpen && "accordion__head--active"
        }`}
      >
        <h4 className="accordion__title">{name}</h4>
        <svg
          className="caret"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="caret__color"
            d="M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988"
            stroke="#474747"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={`accordion__body ${accordionOpen && "accordion-open"} `}>
        <div>
          {subcategories.map((el) => (
            <SubAccordion
              el={el}
              key={el.id}
              selectSidebarCart={selectSidebarCart}
              isTretyCategoryId={isTretyCategoryId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
