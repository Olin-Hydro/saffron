import React from "react";

import SensorTaskWrapper from "../SensorTaskWrapper/SensorTaskWrapper";
import { Col, Container, Row } from "react-bootstrap";

import './Home.css'

const Home = () => {
  return (
    <Container className="HomeContent" xs="auto">
      <Row className="WidgetRow">
        <Col className="WidgetCol">
          <SensorTaskWrapper
            sensorTaskType="ph"
          ></SensorTaskWrapper>
        </Col>
        <Col className="WidgetCol">
          <SensorTaskWrapper
              sensorTaskType="ec"
          ></SensorTaskWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
