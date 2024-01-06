import { useEffect, useState } from "react";

import axios from "../axios/axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(url) {
      const response = await axios.get(url);

      setData(response.data);
      setLoading(false);
    }
    fetchData(url);
  }, [url]);

  return { data, loading };
};

export default useFetch;
