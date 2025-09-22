import "./Footer.css";

import HomeIcon from "../../assets/svg/HomeIcon";
import TrendingIcon from "../../assets/svg/TrendingIcon";
import SubscriptionsIcon from "../../assets/svg/SubscriptionsIcon";
import LibraryIcon from "../../assets/svg/LibraryIcon";

import SidebarItem from "../SidebarItem/SidebarItem";

function Footer() {
  const sidebar_items = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Trending", icon: <TrendingIcon />, itemClass: "trending" },
    { name: "Subscriptions", icon: <SubscriptionsIcon /> },
    { name: "Library", icon: <LibraryIcon /> },
  ];

  return (
    <footer className="footer">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {sidebar_items.map((item) => (
            <SidebarItem
              icon={item.icon}
              name={item.name}
              itemClass={item.itemClass}
            />
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
