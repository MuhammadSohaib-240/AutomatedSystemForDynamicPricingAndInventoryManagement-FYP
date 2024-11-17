import axios from "axios";

const USER_REST_API_URL = "https://localhost:7173/api/Product";

interface LoginUserData {
  usernameOrEmail: string;
  password: string;
}

class ProductServices {
  async authenticateUser(userData: LoginUserData): Promise<any> {
    try {
      console.log("Service is called");
      const response = await axios.post(`${USER_REST_API_URL}/login`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ProductServices();
