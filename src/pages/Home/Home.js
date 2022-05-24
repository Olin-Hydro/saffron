import React from "react";

import WidgetWrapper from "../../components/WidgetWrapper";
import SensorTaskWrapper from "../../components/SensorTaskWrapper/SensorTaskWrapper";
import { Col, Container, Row } from "react-bootstrap";

import './Home.css'

const Home = () => {
  return (
    <Container className="HomeContent" xs="auto">
      <Row className="WidgetRow">
        <Col className="WidgetCol">
          <WidgetWrapper>
            <SensorTaskWrapper
              sensorTaskType="ph"
            ></SensorTaskWrapper>
          </WidgetWrapper>
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
