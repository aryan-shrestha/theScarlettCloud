import { useEffect, useState } from "react";

import axios from "../axios/axios";
import { redirect, useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err.response.status);
        if (err.response.status === 404) {
          navigate("/page-not-found");
        }
      }
    };
    fetchData(url);
  }, [url]);

  return { data, loading };
};

export default useFetch;
