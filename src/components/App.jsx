import {Calculator} from './Calculator';
import { createContext, useState } from "react";

export const calculatorContext = createContext("0");

function App() {
  const [calculat, setCalculat] = useState("");
  return (
    <calculatorContext.Provider value={[calculat, setCalculat]}>
    <Calculator/>
    </calculatorContext.Provider>
  );
}

export default App;
