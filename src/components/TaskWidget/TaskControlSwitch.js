import React from "react";
import PropTypes from "prop-types";
import { Container, Button } from "react-bootstrap";

import "./TaskWidget.css"

const TaskControlSwitch = ({taskState}) => {  

  return (
    <Button>
      <p>switch</p>
    </Button>
  );
};

TaskControlSwitch.propTypes = {
  taskState: PropTypes.string,
};

export default TaskControlSwitch;
