import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./SensorStats.styles";

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

const SensorStats = ({ phLogs, ecLogs, tempLogs, prevHours }) => {
  var phMean = getMean(phLogs);
  var ecMean = getMean(ecLogs);
  var tempMean = getMean(tempLogs);

  var phMax = getMax(phLogs);
  var ecMax = getMax(ecLogs);
  var tempMax = getMax(tempLogs);

  var phMin = getMin(phLogs);
  var ecMin = getMin(ecLogs);
  var tempMin = getMin(tempLogs);
  return (
    <Wrapper>
      <h3>{prevHours} Hour Sensor Summary</h3>
      <ul>
        <li>Max ph: {phMax}</li>
        <li>Min ph: {phMin}</li>
        <li>Mean ph: {phMean}</li>
      </ul>
      <ul>
        <li>Max ec: {ecMax}</li>
        <li>Min ec: {ecMin}</li>
        <li>Mean ec: {ecMean}</li>
      </ul>
      <ul>
        <li>Max temp: {tempMax}</li>
        <li>Min temp: {tempMin}</li>
        <li>Mean temp: {tempMean}</li>
      </ul>
    </Wrapper>
  );
};

SensorStats.propTypes = {
  phData: PropTypes.array,
  ecData: PropTypes.array,
  tempData: PropTypes.array,
  prevHours: PropTypes.number,
};

export default SensorStats;
