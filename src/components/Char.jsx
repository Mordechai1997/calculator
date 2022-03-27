import { Button } from "react-bootstrap";
import { calculatorContext } from "./App";
import { useContext } from "react";

export default function Char({ char }) {
  const setCalculat = useContext(calculatorContext)[1];
  return (
    <Button
      variant="secondary"
      className="m-2"
      style={{ width: "50px" }}
      onClick={() => {
        setCalculat((prev) => prev + { char }.char);
      }}
    >
      {char}
    </Button>
  );
}
