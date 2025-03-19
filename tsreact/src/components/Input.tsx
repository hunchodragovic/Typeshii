import React, { useState } from "react";

interface InputProps {
  value: string;
}

const Input: React.FC<InputProps> = ({ value }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleChange} />;
};

export default Input;
