import React from "react";
import PropTypes from "prop-types";
import Plot from "react-plotly.js";
import { Wrapper } from "./SensorPlot.styles";

const SensorPlot = ({ data, dataType }) => {
  let x = [];
  let y = [];
  for (let i in data) {
    x.push(data[i].createdAt);
    y.push(data[i].data);
  }
  return (
    <Wrapper>
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
          title: `${dataType} Sensor Readings`,
          xaxis: { title: { text: "Date" } },
          yaxis: { title: { text: `${dataType}` } },
        }}
      />
    </Wrapper>
  );
};

SensorPlot.propTypes = {
  data: PropTypes.array,
  dataType: PropTypes.string,
};

export default SensorPlot;
