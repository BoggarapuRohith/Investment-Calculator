import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 8,
    duration: 5,
  });

  const isInputValid = inputValue.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInputValue(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <UserInput inputValue={inputValue} onInputChange={handleChange} />
      {isInputValid ? <Results inputValue={inputValue} /> :
        <p className="center">Please enter a valid duration greater than 0.</p>}
    </>
  );
}

export default App
