import React from "react";
import PropTypes from "prop-types";

const TaskWidget = ({ TaskType, taskState, enableSwitch, avgTime, numCycles }) => {  

  return (
    <div>
      <ul>
        <li>{TaskType}</li>
        <li>{taskState}</li>
        <li>{enableSwitch}</li>
        <li>{avgTime}</li>
        <li>{numCycles}</li>
      </ul>
    </div>
  );
};

TaskWidget.propTypes = {
  TaskType: PropTypes.string,
  taskState: PropTypes.string,
  enableSwitch: PropTypes.number,
  avgTime: PropTypes.number,
  numCycles: PropTypes.number,
};

export default TaskWidget;
