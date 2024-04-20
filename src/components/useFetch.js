import { useEffect, useRef, useState } from "react";

const useFetch = (petKind, urlPararms) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [searchParams, setSearchParams] = useState(urlPararms);
  const abortControllerRef = useRef(null);

  const storage = window.localStorage;
  useEffect(() => {
    const fetchHandle = async () => {
      const key = `${petKind}-${JSON.stringify(searchParams)}`;
      // use localStorage data for the search term if it exists
      const localData = JSON.parse(storage.getItem(key));
      if (localData) {
        setData(localData);
        setLoading(false);
        return;
      }
      const params = new URLSearchParams(searchParams);
      const url = `${process.env.REACT_APP_BASE_URL}/${petKind}s${
        params.size !== 0 ? `?${params}` : ""
      }`;
      const headers = {
        [process.env.REACT_APP_KEY_NAME]: process.env.REACT_APP_KEY_VALUE,
      };
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      const signal = abortControllerRef.current?.signal;
      setLoading(true);
      try {
        const response = await fetch(url, { headers, signal });
        const data = await response.json();
        setData(data);

        // if (data.length === 0) {
        //   throw new Error(
        //     "Unfortunately, there are no items matching your request."
        //   );
        // }
        storage.setItem(key, JSON.stringify(data));
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("aborted");
          return;
        }
        setError(error);
        setLoading(false);
      }
      // finally {
      //   setLoading(false);
      // }
    };

    fetchHandle();
  }, [petKind, searchParams]);
  return { data, error, isLoading, setSearchParams };
};

export default useFetch;
