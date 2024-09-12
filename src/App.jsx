import "./App.css";
import { VisibleProvider } from "./components/VisibleContext";
import Form from "./components/Form";

function App() {
  return (
    <>
      <VisibleProvider>
        <h1>Registration Form</h1>
        <h3>Enter your personal data to create your account</h3>
        <Form />
      </VisibleProvider>
    </>
  );
}

export default App;
