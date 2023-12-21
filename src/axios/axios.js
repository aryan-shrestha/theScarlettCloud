import axios from "axios";

const baseURL = "https://aryanshrestha274.pythonanywhere.com/";

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
