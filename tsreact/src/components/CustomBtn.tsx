type CustomBtnProps = {
  variant: "primary" | "secondary";
};

const CustomBtn = ({ variant }: CustomBtnProps) => {
  return <button className={variant}>Click me</button>;
};

export default CustomBtn;
