import React from "react";
import PropTypes from "prop-types";
import Plot from "react-plotly.js";

const SensorPlot = ({ data, dataType }) => {
  let x = [];
  let y = [];
  for (let i in data) {
    x.push(data[i].createdAt);
    y.push(data[i].data);
  }
  return (
    <Plot
      data={[
        {
          x: x,
          y: y,
          type: "scatter",
          mode: "markers",
          marker: { color: "red" },
        },
      ]}
      layout={{
        width: 800,
        height: 500,
        title: `${dataType} Sensor Readings`,
        xaxis: { title: { text: "Date" } },
        yaxis: { title: { text: `${dataType}` } },
      }}
    />
  );
};

SensorPlot.propTypes = {
  data: PropTypes.array,
  dataType: PropTypes.string,
};

export default SensorPlot;
