import React from "react";
import PropTypes from "prop-types";

const TaskWidget = ({ TaskType, TaskStatus, enableSwitch, avgTime, numCycles }) => {  

  return (
    <div>
      <ul>
        <li>{TaskType}</li>
        <li>{TaskStatus}</li>
        <li>{enableSwitch}</li>
        <li>{avgTime}</li>
        <li>{numCycles}</li>
      </ul>
    </div>
  );
};

TaskWidget.propTypes = {
  TaskType: PropTypes.string,
  TaskStatus: PropTypes.string,
  enableSwitch: PropTypes.number,
  avgTime: PropTypes.number,
  numCycles: PropTypes.number,
};

export default TaskWidget;
