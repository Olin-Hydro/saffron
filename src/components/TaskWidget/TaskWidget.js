import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row, Stack} from "react-bootstrap";

import TaskControlSwitch from "./TaskControlSwitch";
import TaskStateIndicator from "./TaskStateIndicator.js";

import "./TaskWidget.css"

const TaskWidget = ({ taskType, taskState, enableSwitch, avgTime, numCycles }) => {  

  return (
    <Stack gap="auto" className="TaskWidget">
      <Container className="TaskHeader">
        <Row>
          <Col className="TaskHeaderIcon">
            <img src=""></img>
          </Col>
          <Col className="TaskHeaderTitle">
            <h4>Dispenser</h4>
          </Col>
          <Col className="TaskHeaderSettingsButton">
            <img src=""></img>
          </Col>
        </Row>
      </Container>
      <Container className="TaskControls">
        <Stack gap="auto">
          <TaskStateIndicator>
            taskState={taskState}
          </TaskStateIndicator>
          <TaskControlSwitch
            enableSwitch={enableSwitch}>
          </TaskControlSwitch>
        </Stack>
      </Container>
      <Container className="TaskStatus">
        <Stack gap={1}>
          <Container className="TaskStatusText">
            <p>{avgTime} avg dispense time</p>
          </Container>
          <Container className="TaskStatusText">
            <p>{numCycles} cycles run today</p>
          </Container>
        </Stack>
      </Container>
    </Stack>
  );
};

TaskWidget.propTypes = {
  taskType: PropTypes.string,
  taskState: PropTypes.string,
  enableSwitch: PropTypes.number,
  avgTime: PropTypes.number,
  numCycles: PropTypes.number,
};

export default TaskWidget;
