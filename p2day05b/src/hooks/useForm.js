import { useState } from "react";


function useForm(initialState) {

  const [formState, setFormState] = useState(initialState);

  const onInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: (type === 'checkbox') ? checked : value
    }))
  }

  const resetForm = () => setFormState(initialState);

  return [formState, onInputChange, resetForm]
}

export default useForm;