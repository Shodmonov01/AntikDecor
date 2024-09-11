import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubAccordion = ({ el, selectSidebarCart, isTretyCategoryId }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Link
        to={`?sidebar_id=${el.id}`}
        data-sidebar={el.id}
        className="sidebar-subcategory"
        key={el.id}
        onClick={() => {
          selectSidebarCart(el.id);
          setIsOpen((prev) => !prev);
        }}
      >
        {el.name}
        {el.subcategories.length > 0 && (
          <svg
            className="caret"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transition: "all 0.3s ease",
              transform: isOpen && "rotate(180deg)",
            }}
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
        )}
      </Link>
      {el.subcategories.length > 0 && isOpen && (
        <ul className={`trety-category `}>
          {el?.subcategories?.map((item) => (
            <li
              className={`${item.id === isTretyCategoryId && "active"}`}
              onClick={() => selectSidebarCart(item?.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubAccordion;
