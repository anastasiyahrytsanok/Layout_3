import "./Header.css";

import menuIcon from "../../assets/icons/menu.svg";
import ytLogo from "../../assets/icons/youtube_logo.svg";
import videoCallIcon from "../../assets/icons/video_call.svg";
import appGridIcon from "../../assets/icons/app_grid.svg";
import bellIcon from "../../assets/icons/notifications.svg";
import avatarImg from "../../assets/avatar.png";
import SearchIcon from "../../assets/svg/SearchIcon";
import ActionsIcon from "../../assets/svg/ActionsIcon";

function Header() {
  return (
    <header>
      <div className="header__start">
        <button className="menu" type="button" aria-label="Open menu">
          <img src={menuIcon} alt="" width="20" height="17" />
        </button>

        <a className="logo" href="/" aria-label="YouTube Home">
          <img src={ytLogo} alt="YouTube logo" width="116" height="25" />
        </a>
      </div>

      <div className="header__center">
        <form
          className="search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="search" className="search__input" placeholder="Search" />
          <button type="submit" className="search__button" aria-label="Search">
            <SearchIcon />
          </button>
        </form>
      </div>

      <div className="header__end">
        <div className="actions">
          <button type="button" className="actions__btn" aria-label="Create">
            <img src={videoCallIcon} alt="" width="27" height="20" />
          </button>

          <button type="button" className="actions__btn" aria-label="Apps">
            <img src={appGridIcon} alt="" width="21" height="21" />
          </button>

          <button
            type="button"
            className="actions__btn actions__btn--notifications"
            aria-label="Notifications"
          >
            <img src={bellIcon} alt="" width="22" height="26" />
            <span className="actions__badge" aria-label="3 new notifications">
              3
            </span>
          </button>
        </div>
        <button type="submit" className="search__button--mobile">
          <SearchIcon />
        </button>

        <button
          type="button"
          className="avatar"
          aria-label="Account"
          style={{ background: `url(${avatarImg}) center/cover no-repeat` }}
        />
      </div>
      <button type="button" className="actions--mobile">
        <ActionsIcon />
      </button>
    </header>
  );
}
export default Header;
