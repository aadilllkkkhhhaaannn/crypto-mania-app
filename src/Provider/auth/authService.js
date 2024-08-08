import axios from "axios";
// const API_URL = "/api/user";
const register = async (formData) => {
  const response = await axios.post(
    "https://authentication-2-qgze.onrender.com/api/user/register",
    formData
  );
  
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};
const login = async (formData) => {
  const response = await axios.post(
    "https://authentication-2-qgze.onrender.com/api/user/login",
    formData
  );
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};
export const authService = {
  register,
  login,
};
export default authService;
