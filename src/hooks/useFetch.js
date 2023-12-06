import { useEffect, useState } from "react";

import axios from "../axios/axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(url) {
      const response = await axios.get(url);
      setData(response.data);
    }
    fetchData(url);
  }, [url]);

  return { data };
};

export default useFetch;
