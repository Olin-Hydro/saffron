import React from "react";
import PropTypes from "prop-types";
import Plot from "react-plotly.js";
import { Wrapper } from "./TaskPlot.styles";

const TaskPlot = ({ tasks }) => {
  let ec = {
    x: [],
    y: [],
    name: "EC Task Logs",
    type: "scatter",
  };
  let ph = {
    x: [],
    y: [],
    name: "pH Task Logs",
    type: "scatter",
  };
  let water = {
    x: [],
    y: [],
    name: "Water Task Logs",
    type: "scatter",
  };
  for (let i in tasks) {
    switch (tasks[i].type) {
      case "ph":
        ph.x.push(tasks[i].createdAt);
        ph.y.push(tasks[i].data);
        break;
      case "ec":
        ec.x.push(tasks[i].createdAt);
        ec.y.push(tasks[i].data);
        break;
      case "water":
        water.x.push(tasks[i].createdAt);
        water.y.push(tasks[i].data);
        break;
      default:
        continue;
    }
  }
  let data = [ec, ph, water];
  return (
    <Wrapper>
      <Plot
        data={data}
        layout={{
          title: "Task Logs",
          xaxis: { title: { text: "Date" } },
          yaxis: { title: { text: "On (1) Off (0)" } },
        }}
      />
    </Wrapper>
  );
};

TaskPlot.propTypes = {
  tasks: PropTypes.array,
};

export default TaskPlot;
