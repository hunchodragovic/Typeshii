import { useState } from "react";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Layout from "./components/Layout";
import MyButton from "./components/MyButton";
import Status from "./components/Status";
import Box from "./components/Box";
import Counter from "./components/Counter";

const App = () => {
  const [inputValue, setInputValue] = useState("Hello");

  return (
    <>
      <Counter />
      <Box style={{ backgroundColor: "lightblue", padding: "20px" }} />
      <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <MyButton
        handleClick={() => {
          console.log("Button clicked");
        }}
      />
      <Status status="loading" />
      <Layout>
        <Heading>50</Heading>
      </Layout>
    </>
  );
};

export default App;
