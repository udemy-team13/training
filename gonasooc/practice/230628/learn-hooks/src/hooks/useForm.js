import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm };

}

export default useForm;