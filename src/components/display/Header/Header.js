import { createRef, useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useClickOutside from "../../../hooks/useClickOutside";
import SearchBar from "../SearchBar/SearchBar";
import ProfilePopup from "../ProfilePopup/ProfilePopup";
import Avatar from "@mui/material/Avatar";
import {
  Search,
  KeyboardBackspaceRounded,
  Home,
  Flag,
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircle,
  MenuRounded,
  Notifications,
  ArrowDropDownRounded,
  Apps,
} from "@mui/icons-material";
import facebookLogoSrc from "../../../assets/facebook-logo.png";
import messengerLogoSrc from "../../../assets/facebook-messenger-logo.svg";
import "./Header.css";

function Header() {
  const { user } = useAuth();
  const [selectedPage, setSelectedPage] = useState();
  const [searchVal, setSearchVal] = useState("");
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const homePageRef = createRef(null);
  const watchPageRef = createRef(null);
  const marketplacePageRef = createRef(null);
  const groupsPageRef = createRef(null);
  const gamingPageRef = createRef(null);
  const menuPageRef = createRef(null);
  const { ref: popupRef, excludeRef, isClickOutside } = useClickOutside();

  function setPageSelected(newSelectedPage) {
    if (newSelectedPage !== selectedPage) {
      selectedPage.classList.remove("header__selected-page");
      newSelectedPage.classList.add("header__selected-page");
      setSelectedPage(newSelectedPage);
    }
  }

  function handleSearch(evt) {
    evt.preventDefault();
    setSearchVal("");
    setSearchBarOpen(false);
  }

  function toggleSearchBar(isOpen) {
    setSearchBarOpen(isOpen);
  }

  function toggleProfilePopupOpen() {
    setProfilePopupOpen(!isProfilePopupOpen);
  }

  const staticHeaderOptions = [
    { title: "home page", ref: homePageRef, icon: Home },
    { title: "watch page", ref: watchPageRef, icon: Flag },
    {
      title: "marketplace page",
      ref: marketplacePageRef,
      icon: SubscriptionsOutlined,
    },
    { title: "groups page", ref: groupsPageRef, icon: StorefrontOutlined },
    { title: "gaming page", ref: gamingPageRef, icon: SupervisedUserCircle },
    {
      title: "menu page",
      ref: menuPageRef,
      icon: MenuRounded,
      additionalClasses: "display-over-900",
    },
  ];

  const headerCenter = staticHeaderOptions.map((option) => {
    return (
      <span
        key={option.title}
        ref={option.ref}
        className={`flex-center header__section header__center-icon-container ${
          option.additionalClasses || ""
        }`}
        onClick={() => setPageSelected(option.ref.current)}
      >
        {<option.icon className="header__center-icon" />}
      </span>
    );
  });

  useEffect(() => {
    if (!selectedPage) {
      homePageRef.current.classList.add("header__selected-page");
      setSelectedPage(homePageRef.current);
    }
  }, [homePageRef, selectedPage, setSelectedPage]);

  useEffect(() => {
    if (isClickOutside) {
      setProfilePopupOpen(false);
    }
  }, [isClickOutside]);

  return (
    <div className="header">
      <div className="header__section-container header__first-section">
        <span className="header__section">
          <img id="header__logo" src={facebookLogoSrc} alt="facebook-logo" />
        </span>
        <span className="header__section">
          <SearchBar
            SearchIcon={Search}
            PopupBackspaceIcon={KeyboardBackspaceRounded}
            isSearchBarOpen={isSearchBarOpen}
            searchVal={searchVal}
            setSearchVal={setSearchVal}
            toggleSearchBar={toggleSearchBar}
            execSearch={handleSearch}
          />
        </span>
      </div>
      <div className="header__section-container header__center-container hidden-under-750">
        {headerCenter}
      </div>
      <div className="header__section-container">
        <span
          id="header__profile-container"
          className="flex-center header__section bolded"
        >
          <Avatar id="header__profile-avatar" src={user?.photoURL} />
          <span id="header__profile-name" className="normal-text">
            {user?.displayName.split(" ")[0]}
          </span>
        </span>
        <span className="flex-center header__section header__right-icon-container">
          <Apps />
        </span>
        <span className="flex-center header__section header__right-icon-container hidden-under-500">
          <img
            className="header__right-image"
            src={messengerLogoSrc}
            alt="facebook messenger logo"
          />
        </span>
        <span className="flex-center header__section header__right-icon-container hidden-under-500">
          <Notifications />
        </span>
        <span
          ref={excludeRef}
          className="flex-center header__section header__right-icon-container"
          onClick={() => toggleProfilePopupOpen()}
        >
          <ArrowDropDownRounded />
        </span>
        {isProfilePopupOpen && (
          <div className="header__profile-popup-container">
            <ProfilePopup popupRef={popupRef} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
