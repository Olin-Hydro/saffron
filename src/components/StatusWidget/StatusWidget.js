import React from "react";
import PropTypes from "prop-types";

const StatusWidget = ({ statusType, statusData, mean, min, max, statusState }) => {  

  return (
    <div>
      <ul>
        <li>{statusType}</li>
        <li>{statusData}</li>
        <li>{mean}</li>
        <li>{min}</li>
        <li>{max}</li>
        <li>{statusState}</li>
      </ul>
    </div>
  );
};

StatusWidget.propTypes = {
  statusType: PropTypes.string,
  statusData: PropTypes.array,
  mean: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  statusState: PropTypes.string,
};

export default StatusWidget;
