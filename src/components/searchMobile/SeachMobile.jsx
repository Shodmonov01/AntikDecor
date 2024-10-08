import { getData } from "../../utils";
import Hamburger from "../hamburger/Hamburger";
import "./search.mobile.scss";

function SeachMobile({
  showSearch,
  showNav,
  setShowNav,
  theme,
  setShowSearch,
  setShowSearchResults,
  setSearchResults,
  setTags,
  setShowTags,
}) {
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

  async function handleFocus(e) {
    const value = e.target.value;

    if (!value) {
      setShowTags(true);
    }

    const data = await getData("filters/");
    setTags(data);
  }

  function closeSearchResults() {
    setShowSearch(!showSearch);
    setShowSearchResults(false);
    const INPUT_EL = document.querySelector(".search-input");
    INPUT_EL.value = "";
  }

  return (
    <div className={`search-mobile ${showSearch && "show-search-mobile"}`}>
      <Hamburger show={showNav} func={setShowNav} theme={theme} />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Введите запрос"
          onFocus={handleFocus}
          onBlur={() => {
            setTimeout(() => {
              setShowTags(false);
            }, 200);
          }}
          onChange={handleSearch}
          className="search-input"
        />
        <span onClick={closeSearchResults}>
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
              fill="#EA5544"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default SeachMobile;
