import "./SidebarItem.css";

function SidebarItem({ icon, name, itemClass }) {
  return (
    <li className={`sidebar__item sidebar__item--${itemClass}`}>
      <a className="sidebar__link" href="#">
        <span className="sidebar__icon-box">{icon}</span>
        <span className="sidebar__name">{name}</span>
      </a>
    </li>
  );
}

export default SidebarItem;
