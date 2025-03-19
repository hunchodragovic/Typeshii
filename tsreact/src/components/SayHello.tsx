type SayHelloProps = {
  arrData: { firstName: string; age: number }[];
};
const SayHello = ({ arrData }: SayHelloProps) => {
  return (
    <div>
      {arrData.map((data, index) => (
        <div key={index}>
          <h1>Hello, {data.firstName}</h1>
          <h2>You are {data.age} years old</h2>
        </div>
      ))}
    </div>
  );
};

export default SayHello;
