type SayHelloProps = {
  name: string;
};
const SayHello = (props: SayHelloProps) => {
  return (
    <div>
      <h1>SayHello {props.name}</h1>
    </div>
  );
};

export default SayHello;
