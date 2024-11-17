import { useState } from "react";

interface AuthTokenProps {
  token: string | null;
  updateToken: (newToken: string) => void;
  removeToken: () => void;
}

const useAuthToken = (): AuthTokenProps => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("jwtToken") || ""
  );

  const updateToken = (newToken: string): void => {
    localStorage.setItem("jwtToken", newToken);
    setToken(newToken);
  };

  const removeToken = (): void => {
    localStorage.removeItem("jwtToken");
    setToken("");
  };

  return { token, updateToken, removeToken };
};

export default useAuthToken;
