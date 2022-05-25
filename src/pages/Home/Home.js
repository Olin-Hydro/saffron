import React from "react";

import WidgetWrapper from "../../components/WidgetWrapper";
import TaskWidget from "../../components/TaskWidget/TaskWidget";
import SensorTaskWrapper from "../../components/SensorTaskWrapper/SensorTaskWrapper";
import { Col, Container, Row } from "react-bootstrap";

import { Grid } from '@mui/material';

import './Home.css'
import SensorWidget from "../../components/SensorWidget/SensorWidget";

const Home = () => {
  return (
    <Grid container spacing={2} direction="column" >
      <Grid container item direction="row">
        <Grid item>
          <WidgetWrapper>
            <SensorWidget></SensorWidget>
          </WidgetWrapper>
        </Grid>
        <Grid item>
          <WidgetWrapper>
            <SensorWidget></SensorWidget>
            <TaskWidget></TaskWidget>
          </WidgetWrapper>
        </Grid>
        <Grid item>
          <WidgetWrapper>
            <TaskWidget></TaskWidget>
          </WidgetWrapper>
        </Grid>
      </Grid>
      <Grid container item direction="row">
        <Grid item>
          <WidgetWrapper>
            <SensorWidget></SensorWidget>
          </WidgetWrapper>
        </Grid>
        <Grid item>
          <WidgetWrapper>
            <SensorWidget></SensorWidget>
            <TaskWidget></TaskWidget>
          </WidgetWrapper>
        </Grid>
        <Grid item>
          <WidgetWrapper>
            <TaskWidget></TaskWidget>
          </WidgetWrapper>
        </Grid>
      </Grid>
    </Grid>
      
    // <Container className="HomeContent" xs="auto">
    //   <Row className="WidgetRow">
    //     <Col className="WidgetCol">
    //       <WidgetWrapper>
    //         <SensorTaskWrapper
    //           sensorTaskType="ph"
    //         ></SensorTaskWrapper>
    //       </WidgetWrapper>
    //     </Col>
    //     <Col className="WidgetCol">
    //       <SensorTaskWrapper
    //           sensorTaskType="ec"
    //       ></SensorTaskWrapper>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Home;
