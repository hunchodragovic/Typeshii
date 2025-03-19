import Heading from "./components/Heading";
import Layout from "./components/Layout";
import Status from "./components/Status";

const App = () => {
  return (
    <>
      <Status status="loading" />
      <Layout>
        <Heading>50</Heading>
      </Layout>
    </>
  );
};

export default App;
