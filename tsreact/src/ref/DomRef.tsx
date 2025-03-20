import { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleClick = () => {
    console.log(inputRef.current?.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
