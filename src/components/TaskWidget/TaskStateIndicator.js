import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import "./TaskWidget.css"

const TaskStateIndicator = ({taskState}) => {  

  return (
    <Container>
      <p>status</p>
    </Container>
  );
};

TaskStateIndicator.propTypes = {
  taskState: PropTypes.string,
};

export default TaskStateIndicator;
