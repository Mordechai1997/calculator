import Number from "./Number";
import Char from "./Char";
import Equal from "./Equal";
import Screen from "./Screen";
import { Container, Row, Col, Button } from "react-bootstrap";
import {useContext} from 'react'
import { calculatorContext } from "./App";



export function Calculator() {
  const setCalculat = useContext(calculatorContext)[1];
  return (
      <Container style={{ width: "290px" }}>
        <Row>
          <Col>
            <Screen />
          </Col>
        </Row>
        <Row>
          <Col>
            <Char char="(" />
            <Char char=")" />
            <Button
              variant="warning"
              className="m-2"
              style={{ width: "50px" }}
              onClick={() => {
                setCalculat((prev) => prev && prev.slice(0, -1));
              }}
            >
              X
            </Button>
            <Button
              variant="secondary"
              className="m-2"
              style={{ width: "50px" }}
              onClick={() => {
                setCalculat("");
              }}
            >
              AC
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Number char="1" />
            <Number char="2" />
            <Number char="3" />
            <Char char="/" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Number char="4" />
            <Number char="5" />
            <Number char="6" />
            <Char char="*" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Number char="7" />
            <Number char="8" />
            <Number char="9" />
            <Char char="+" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Number char="0" />
            <Number char="." />
            <Equal char="=" />
            <Char char="-" />
          </Col>
        </Row>
      </Container>
  );
}
