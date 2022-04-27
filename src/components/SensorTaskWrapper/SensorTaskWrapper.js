import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import SensorWidget from "../SensorWidget/SensorWidget";
import TaskWidget from "../TaskWidget/TaskWidget";

import { useSensorLogs } from "../../hooks/useSensorLogs";
import { useTaskLogs } from "../../hooks/useTaskLogs";

let prevHours = 24;

const getSensorState = (sensorLogs) => {
  return 'normal'
}

const getTaskState = (taskLogs) => {
  // return (taskLogs.data[taskLogs.data.length - 1] ? 'running' : 'idle');
  return 'running'
}

const getMean = (sensorLogs) => {
  let mean = 0;
  for (let i in sensorLogs) {
    mean += sensorLogs[i].data;
  }
  mean /= sensorLogs.length;
  return mean.toFixed(2);
};

const getMax = (sensorLogs) => {
  return Math.max.apply(
    Math,
    sensorLogs.map((log) => {
      return log.data;
    })
  );
};

const getMin = (sensorLogs) => {
  return Math.min.apply(
    Math,
    sensorLogs.map((log) => {
      return log.data;
    })
  );
};

const SensorTaskWrapper = ({ sensorTaskType }) => {

  const sensorLogs = useSensorLogs(sensorTaskType, prevHours).sensorLogs;
  // compute these on the server instead of client
  var sensorState = getSensorState(sensorTaskType);
  var mean = getMean(sensorLogs)
  var min = getMin(sensorLogs)
  var max = getMax(sensorLogs)

  const taskLogs = useTaskLogs(prevHours).taskLogs;
  var taskState = getTaskState(taskLogs);
  var enableSwitch = 'on-enabled'
  var avgTime = 2
  var numCycles = 3

  return (
    <Container className="SensorTaskWrapper">
      <p>{sensorTaskType}</p>
      <SensorWidget
      sensorType={sensorTaskType}
      sensorLogs={sensorLogs}
      mean={mean}
      min={min}
      max={max}
      sensorState={sensorState}
      ></SensorWidget>
      {/* TODO: add divider */}
      <TaskWidget
        taskType={sensorTaskType}
        taskState={taskState}
        enableSwitch={enableSwitch}
        avgTime={avgTime}
        numCycles={numCycles}
      ></TaskWidget>
    </Container>
  );
};

SensorTaskWrapper.propTypes = {
  ecData: PropTypes.array,
  tempData: PropTypes.array,
  prevHours: PropTypes.number,
};

export default SensorTaskWrapper;
