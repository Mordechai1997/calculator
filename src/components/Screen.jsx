import { calculatorContext } from "./App";
import { useContext } from "react";

export default function Screen() {
  const calculat = useContext(calculatorContext);
  return (
    <div className="m-2" style={{border: "1px solid grey", height: "80px" }}>
      <p className="m-2">{calculat[0]}</p>
    </div>
  );
}
