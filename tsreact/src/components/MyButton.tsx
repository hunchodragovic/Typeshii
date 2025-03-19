import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const MyButton = ({ handleClick }: ButtonProps) => {
  return <button onClick={handleClick}>Click Me</button>;
};

export default MyButton;
