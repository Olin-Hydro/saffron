import { useState, useEffect } from "react";
import API from "../HydrangeaAPI";

export const useGardens = () => {
  const [data, setData] = useState<Garden[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await API.getGardens()
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { data, error, loaded };
};
