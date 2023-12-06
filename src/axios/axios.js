import axios from "axios";

const baseURL = "http://192.168.1.65:8000/";

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
