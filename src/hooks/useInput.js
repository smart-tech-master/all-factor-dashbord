import { useState } from 'react';

const useInput = (initialState = '') => {
  const [input, setInput] = useState(initialState);
  const handleChange = (e) => setInput(e.target.value);

  return [input, handleChange];
};

export default useInput;
