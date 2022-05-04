import Header from "./components/Header";
import AppBody from "./components/AppBody";
import FormView from "./views/FormView";

function App() {
  return (
    <>
      <Header />
      <AppBody>
        <FormView />
      </AppBody>
    </>
  );
}

export default App;
