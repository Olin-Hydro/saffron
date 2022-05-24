import React from "react";
import PropTypes from "prop-types";

// KEEP : import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SensorWidget = ({ sensorType, sensorData, mean, min, max, sensorState }) => {  

  return (
    <div>
      <ul>
        <li>{sensorType}</li>
        <li>{sensorData}</li>
        <li>{mean}</li>
        <li>{min}</li>
        <li>{max}</li>
        <li>{sensorState}</li>
      </ul>
    </div>
  );
};

SensorWidget.propTypes = {
  sensorType: PropTypes.string,
  sensorData: PropTypes.array,
  mean: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  sensorState: PropTypes.string,
};

export default SensorWidget;
