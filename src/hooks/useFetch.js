import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgreess] = useState(false);

  useEffect(() => {
    const getPic = async () => {
      setInProgreess(true);
      try {
        const res = await fetch(url);
        const result = await res.json();
        if (res.ok) {
          setData(result);
          setError(null);
        } else {
          throw result;
        }
      } catch (error) {
        setError(error);
      } finally {
        setInProgreess(false);
      }
    };

    getPic();
  }, []);

  return { data, error, inProgress };
};
