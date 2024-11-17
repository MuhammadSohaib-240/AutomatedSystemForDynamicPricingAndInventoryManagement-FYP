import axios from "axios";

const USER_REST_API_URL = "https://localhost:7173/api/User";

class UserServices {
  async fetchUsers(): Promise<any> {
    try {
      console.log("Service is called");
      const response = await axios.get(`${USER_REST_API_URL}/fetchUsers`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async fetchUser(userId: string | undefined): Promise<any> {
    try {
      console.log("Service is called");
      const response = await axios.get(
        `${USER_REST_API_URL}/fetchUser/${userId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserServices();
