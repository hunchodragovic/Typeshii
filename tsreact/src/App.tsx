import Heading from "./components/Heading";
import Layout from "./components/Layout";
import MyButton from "./components/MyButton";
import Status from "./components/Status";

const App = () => {
  return (
    <>
      <MyButton handleClick={() => console.log("Button clicked!")} />
      <Status status="loading" />
      <Layout>
        <Heading>50</Heading>
      </Layout>
    </>
  );
};

export default App;
