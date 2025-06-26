import { useEffect, useState } from "react";

function useLocalStorage(key, intialState){

  const [state, setState] = useState (() => {
    const json = localStorage.getItem(key);
    return json !== null ? JSON.parse(json) : intialState;
  });

  useEffect(() => {
    let updState = JSON.stringify(state);
    localStorage.setItem(key, updState)
  }, [key, state])

  return [state, setState];
}

export default useLocalStorage;