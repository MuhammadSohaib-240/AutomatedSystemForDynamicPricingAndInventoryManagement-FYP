import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/home_page/Home";
import Login from "./pages/login_page/Login";
import Registration from "./pages/registration_page/Registration";
import AdminPanel from "./pages/admin_panel/AdminPanel";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/home" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
