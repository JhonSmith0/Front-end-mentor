import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios<T = unknown>(url: string, deps: any[] = []) {
  const [data, setData] = useState<T>();
  const [isFetching, setIsFetching] = useState<boolean>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setError(undefined);

    if (!url) return;
    setIsFetching(true);
    axios
      .get(url)
      .then(({ data }) => setData(data))
      .catch((err) => {
        setError(err);
        setData(undefined);
      })
      .finally(() => setIsFetching(false));
  }, [...deps]);

  return { data, isFetching, error };
}
