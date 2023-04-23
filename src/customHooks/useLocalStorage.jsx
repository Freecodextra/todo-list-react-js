import { useEffect, useState } from "react";

function getPrevValue(key, init) {
  const prevValue = JSON.parse(localStorage.getItem(key));
  if (prevValue) return prevValue;
  if (init instanceof Function) return init();
  return init;
}
function useLocalStorage(key, init) {
  const [value, setValue] = useState(() => {
    return getPrevValue(key, init);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

export default useLocalStorage;