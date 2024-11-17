import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import img from "../../images/img.png";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar = ({ onMenuToggle }: NavbarProps) => {
  return (
    <>
      <div className="navbar">
        <FontAwesomeIcon
          icon={faBars}
          className="menu-icon icon"
          onClick={onMenuToggle}
        />
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search..." />
          <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        <div className="notification-icon icon">
          <FontAwesomeIcon icon={faBell} />
          <span className="notification-badge badge">5</span>
        </div>

        <div className="comment-icon icon">
          <FontAwesomeIcon icon={faMessage} />
          <span className="comment-badge badge">5</span>
        </div>

        <div className="profile-icon">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
