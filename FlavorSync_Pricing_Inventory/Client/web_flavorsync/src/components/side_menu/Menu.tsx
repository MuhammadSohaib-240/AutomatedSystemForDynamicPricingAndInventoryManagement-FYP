import "./Menu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faDashboard,
  faBoxesStacked,
  faCartShopping,
  faChartSimple,
  faStarHalfStroke,
  faUser,
  faMoneyCheckDollar,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <div className="menu-content">
        <ul className="menu-list">
          <li className="dashboard">
            <Link to="/admin/dashboard" className="link">
              <FontAwesomeIcon icon={faDashboard} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="products">
            <Link to="/admin/products" className="link">
              <FontAwesomeIcon icon={faBoxesStacked} />
              <span>Products</span>
            </Link>
          </li>
          <li className="orders">
            <Link to="/admin/orders" className="link">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>Orders</span>
            </Link>
          </li>
          <li className="statistics">
            <Link to="/admin/statistics" className="link">
              <FontAwesomeIcon icon={faChartSimple} />
              <span>Statistics</span>
            </Link>
          </li>
          <li className="reviews">
            <Link to="/admin/reviews" className="link">
              <FontAwesomeIcon icon={faStarHalfStroke} />
              <span>Reviews</span>
            </Link>
          </li>
          <li className="customers">
            <Link to="/admin/customers" className="link">
              <FontAwesomeIcon icon={faUser} />
              <span>Customers</span>
            </Link>
          </li>
          <li className="transactions">
            <Link to="/admin/transactions" className="link">
              <FontAwesomeIcon icon={faMoneyCheckDollar} />
              <span>Transactions</span>
            </Link>
          </li>
          <li className="settings">
            <Link to="/admin/settings" className="link">
              <FontAwesomeIcon icon={faGear} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo-close-container">
        <div className="logo">
          <h1>Shop Point</h1>
        </div>
        <FontAwesomeIcon
          icon={faClose}
          className="close-icon"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Menu;
