import React from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add the function type
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default Input;
