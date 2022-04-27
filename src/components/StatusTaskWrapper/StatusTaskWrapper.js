import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import StatusWidget from "../StatusWidget/StatusWidget";
import TaskWidget from "../TaskWidget/TaskWidget";

import { useSensorLogs } from "../../hooks/useSensorLogs";
import { useTaskLogs } from "../../hooks/useTaskLogs";

let prevHours = 24;

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

const StatusTaskWrapper = ({ statusTaskType }) => {

  const statusLogs = useSensorLogs(statusTaskType, prevHours).sensorLogs;
  // compute these on the server instead of client
  var mean = getMean(statusLogs)
  var min = getMin(statusLogs)
  var max = getMax(statusLogs)
  var statusState = 'normal'

  const taskLogs = useTaskLogs(prevHours).taskLogs;
  var TaskStatus = 'running'
  var enableSwitch = 'on-enabled'
  var avgTime = 2
  var numCycles = 3

  return (
    <Container>
      <p>{statusTaskType}</p>
      <StatusWidget
      statusType={statusTaskType}
      statusLogs={statusLogs}
      mean={mean}
      min={min}
      max={max}
      statusState={statusState}
      ></StatusWidget>
      {/* TODO: add divider */}
      <TaskWidget
        TaskType={statusTaskType}
        TaskStatus={TaskStatus}
        enableSwitch={enableSwitch}
        avgTime={avgTime}
        numCycles={numCycles}
      ></TaskWidget>
    </Container>
  );
};

StatusTaskWrapper.propTypes = {
  ecData: PropTypes.array,
  tempData: PropTypes.array,
  prevHours: PropTypes.number,
};

export default StatusTaskWrapper;
