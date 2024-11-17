import { Outlet, Navigate } from "react-router-dom";
import useAuthToken from "../hooks/useAuthToken";
import { useEffect, useState } from "react";
import AuthServices from "../services/AuthServices";

const PrivateRoutes = () => {
  const { token, updateToken } = useAuthToken();
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        if (token) {
          const response = await AuthServices.validateToken(token);
          setIsValidToken(!response);
          if (response) {
            updateToken("");
          }
        } else {
          setIsValidToken(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    validateToken();
  }, [token]);

  if (isValidToken === null) {
    // You can show a loading indicator here if needed
    return null;
  }

  return isValidToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
