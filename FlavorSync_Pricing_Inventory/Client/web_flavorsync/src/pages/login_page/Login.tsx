import { useState } from "react";
import "./Login.css";
import useAuthToken from "../../hooks/useAuthToken";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../../services/AuthServices";
import img from "../../assets/login.webp";
import FormField from "../../components/form_field/FormField";
import LoadingOverlay from "../../components/loading_overlay/LoadingOverlay";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateToken } = useAuthToken();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await AuthServices.authenticateUser({
        usernameOrEmail,
        password,
      });

      const token = response.token;

      console.log("Token received from API:", token);
      console.log("User Role:", response.role);

      updateToken(token);

      navigate("/home");
    } catch (errorMessage) {
      throw errorMessage;
    } finally {
      setIsLoading(false); // Set loading to false when the operation is complete
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="left-container">
          <div className="left-inner-container">
            <h1>ShopPoint</h1>
            <p>
              Gain data-based insights, view progress at a glance,and
              <br />
              manage your organization smarter
            </p>
            <img src={img} alt="" />
          </div>
        </div>
        <div className="right-container">
          <div className="details">
            <h1>Welcome Back!</h1>
            <p>
              Etiam quis quam urna. Aliquam odio erat,
              <br />
              accumsan eu nulla in
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <FormField
              label="E-mail or Username"
              id="usernameOrEmail"
              name="usernameOrEmail"
              type="text"
              placeholder="Enter your username or email..."
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
            />

            <FormField
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <h3 className="forgot-password">Forgot Password?</h3>

            <input type="submit" value="Login" className="submit-button" />

            <div className="navigation-link">
              <label>Don't have an account?</label>
              <Link to="/registration" className="link">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <LoadingOverlay isLoading={isLoading} />
    </>
  );
};

export default Login;
