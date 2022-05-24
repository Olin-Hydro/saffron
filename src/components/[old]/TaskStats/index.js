import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./TaskStats.styles";

const calcStats = (taskLogs) => {
  let stats = {
    meanPhPump: 0,
    meanEcPump: 0,
    meanWaterPump: 0,
    numPhPumpOn: 0,
    numPhPumpOff: 0,
    numEcPumpOn: 0,
    numEcPumpOff: 0,
    numWaterPumpOn: 0,
    numWaterPumpOff: 0,
  };
  let phLastOn = new Date();
  let ecLastOn = new Date();
  let waterLastOn = new Date();
  for (let i in taskLogs) {
    let log = taskLogs[i];
    switch (log.type) {
      case "ph":
        if (log.data === "0") {
          stats.numPhPumpOff += 1;
          if (stats.numPhPumpOn === 0) {
            break;
          }
          stats.meanPhPump +=
            Math.abs(new Date(log.createdAt) - phLastOn) / 1000;
        } else {
          stats.numPhPumpOn += 1;
          phLastOn = new Date(log.createdAt);
        }
        break;
      case "ec":
        if (log.data === "0") {
          stats.numEcPumpOff += 1;
          if (stats.numEcPumpOn === 0) {
            break;
          }
          stats.meanEcPump +=
            Math.abs(new Date(log.createdAt) - ecLastOn) / 1000;
        } else {
          stats.numEcPumpOn += 1;
          ecLastOn = new Date(log.createdAt);
        }
        break;
      case "water":
        if (log.data === "0") {
          stats.numWaterPumpOff += 1;
          if (stats.numWaterPumpOn === 0) {
            break;
          }
          stats.meanWaterPump +=
            Math.abs(new Date(log.createdAt) - waterLastOn) / 1000;
        } else {
          stats.numWaterPumpOn += 1;
          waterLastOn = new Date(log.createdAt);
        }
        break;
      default:
        continue;
    }
  }
  stats.meanPhPump /= stats.numPhPumpOn;
  return stats;
};

const TaskStats = ({ taskLogs, prevHours }) => {
  var stats = calcStats(taskLogs);
  return (
    <Wrapper>
      <h3>{prevHours} Hour Task Summary</h3>
      <ul>
        <li>Mean ph dispense time: {stats.meanPhPump}</li>
        <li>Times turned on: {stats.numPhPumpOn}</li>
        <li>Times turned off: {stats.numPhPumpOff}</li>
      </ul>
      <ul>
        <li>Mean ec dispense time: {stats.meanEcPump}</li>
        <li>Times turned on: {stats.numEcPumpOn}</li>
        <li>Times turned off: {stats.numEcPumpOff}</li>
      </ul>
      <ul>
        <li>Mean water dispense time: {stats.meanWaterPump}</li>
        <li>Times turned on: {stats.numWaterPumpOn}</li>
        <li>Times turned off: {stats.numWaterPumpOff}</li>
      </ul>
    </Wrapper>
  );
};

TaskStats.propTypes = {
  taskLogs: PropTypes.array,
  prevHours: PropTypes.number,
};

export default TaskStats;
