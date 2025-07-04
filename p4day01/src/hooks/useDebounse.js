import { useEffect, useState } from "react";

export default function useDebounse (value, delay=500) {

  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounce;
  
}

