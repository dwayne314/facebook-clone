import { useEffect } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import "./SearchBar.css";

function SearchBar({
  SearchIcon,
  PopupBackspaceIcon,
  searchVal,
  setSearchVal,
  isSearchBarOpen,
  toggleSearchBar,
  execSearch,
}) {
  const { ref: popupRef, isClickOutside } = useClickOutside();

  useEffect(() => {
    if (isClickOutside) {
      toggleSearchBar(false);
    }
  }, [isClickOutside, toggleSearchBar]);

  return (
    <div ref={popupRef} className="search-bar">
      <form
        className={`search-bar__form${
          isSearchBarOpen ? " background-disabled with-hover" : ""
        }`}
        onSubmit={(evt) => execSearch(evt)}
      >
        {!isSearchBarOpen && (
          <label id="search-bar__label" htmlFor="search-bar__input">
            <SearchIcon />
          </label>
        )}

        <div id={`${isSearchBarOpen ? "search-bar__popup-container" : ""}`}>
          {isSearchBarOpen && (
            <span
              className="search-bar__popup-icon-container"
              onClick={() => toggleSearchBar(false)}
            >
              <PopupBackspaceIcon />
            </span>
          )}
          <input
            id={`${
              isSearchBarOpen ? "search-bar__popup" : "search-bar__input"
            }`}
            type="text"
            className="text-input"
            placeholder="Search Facebook"
            value={searchVal}
            onChange={(evt) => setSearchVal(evt.target.value)}
            onClick={isSearchBarOpen ? () => null : () => toggleSearchBar(true)}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
