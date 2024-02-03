import axios from "axios";

const baseURL = "https://aryanshrestha274.pythonanywhere.com/";
// const baseURL = "http://127.0.0.1:8000/";
// const baseURL = "http://192.168.1.65:8000/";

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default instance;
