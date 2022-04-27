import React from "react";

import StatusTaskWrapper from "../StatusTaskWrapper/StatusTaskWrapper";
import { Col, Container, Row } from "react-bootstrap";

import './Home.css'

const Home = () => {
  return (
    <Container className="HomeContent" xs="auto">
      <Row className="WidgetRow">
        <Col className="WidgetCol">
          <StatusTaskWrapper
            statusTaskType="ph"
          ></StatusTaskWrapper>
        </Col>
        <Col className="WidgetCol">
          <StatusTaskWrapper
              statusTaskType="ec"
          ></StatusTaskWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
