import { useState } from "react";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Layout from "./components/Layout";
import MyButton from "./components/MyButton";
import Status from "./components/Status";

const App = () => {
  const [inputValue, setInputValue] = useState("Hello");

  return (
    <>
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
