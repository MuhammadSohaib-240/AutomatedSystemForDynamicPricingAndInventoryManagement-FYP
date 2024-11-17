import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/side_menu/Menu";
import { Route, Routes } from "react-router-dom";
import Products from "../products_page/Products";
import Comments from "../comments_page/Comments";
import Dashboard from "../dashboard_page/Dashboard";
import Customers from "../users_page/Customers";
import Settings from "../settings_page/Settings";
import UpdateForm from "../update_form/UpdateForm";

const AdminPanel = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="admin-panel">
        <Navbar onMenuToggle={toggleMenu} />
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
        <div className="admin-panel-container">
          <Routes>
            <Route path="customers" element={<Customers />} />
            <Route path="products" element={<Products />} />
            <Route path="comments" element={<Comments />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="update-form/:userId" element={<UpdateForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
