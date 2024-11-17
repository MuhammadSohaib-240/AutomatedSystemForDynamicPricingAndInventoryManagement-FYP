import axios from "axios";

const USER_REST_API_URL = "http://localhost:8080/api/auth";

interface RegisterationUserData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  streetAddress: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  dob: string;
}

interface LoginUserData {
  usernameOrEmail: string;
  password: string;
}

class AuthService {
  async registerUser(userData: RegisterationUserData): Promise<any> {
    try {
      console.log("Service is called");
      const response = await axios.post(
        `${USER_REST_API_URL}/register`,
        userData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async authenticateUser(userData: LoginUserData): Promise<any> {
    try {
      console.log("Service is called");
      const response = await axios.post(`${USER_REST_API_URL}/login`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async validateToken(token: string): Promise<any> {
    try {
      console.log("Service is called");
      const response = await axios.post(`${USER_REST_API_URL}/validate`, {
        token: token, // Send 'token' as part of the request body
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
