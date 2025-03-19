type Props = {
  children: string | number;
};

const Heading = (props: Props) => {
  return <div>{props.children}</div>;
};

export default Heading;
