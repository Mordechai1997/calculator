import { Button } from "react-bootstrap";
import { calculatorContext } from "./App";
import { useContext } from "react";

export default function Number({ char }) {
  const setCalculat = useContext(calculatorContext)[1];

  return (
    <Button
      onClick={() => {
        setCalculat((prev) => prev + { char }.char);
      }}
      className="m-2"
      style={{ width: "50px" }}
    >
      {char}
    </Button>
  );
}
