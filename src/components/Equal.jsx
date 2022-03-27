import { Button } from "react-bootstrap";
import { calculatorContext } from "./App";
import { useContext } from "react";

export default function Equal({ char }) {
  const [calculat, setCalculat] = useContext(calculatorContext);

  const calculatResult = () => {
     console.log(calculat)
    try {
      setCalculat(window.eval(calculat));
    } catch {
      alert("not currrent");
    }
  };
  return (
    <Button
      variant="success"
      className="m-2"
      style={{ width: "50px" }}
      onClick={calculatResult}
    >
      {char}
    </Button>
  );
}
