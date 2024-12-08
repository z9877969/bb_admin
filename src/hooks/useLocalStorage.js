import { useEffect, useState } from 'react';

export const useLocalStorage = (key, value) => {
  const [data, setData] = useState(() =>
    JSON.parse(localStorage.getItem(key) || value)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
