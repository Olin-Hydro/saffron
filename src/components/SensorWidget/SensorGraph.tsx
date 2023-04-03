import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SensorGraph = ({ sensorData }) => {
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      xAxis: {
        display: false // this will remove only the label
      },
      yAxis: {
        display: true
      }
    }
  };

  const numPoints = sensorData.length
  let labels = Array(numPoints).fill('')
  labels[0] = '24H'
  labels[(numPoints / 2 >> 0)] = '12H'
  labels[numPoints - 1] = '0H'
  const data = {
    labels,
    datasets: [
      {
        label: '',
        xAxisID: 'xAxis',
        yAxisID: 'yAxis',
        data: sensorData,
        borderColor: '#2DD886',
        backgroundColor: '#2DD886',
        tension: 0.3
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: 'lightGreen.main', borderRadius: 1 }}>
      <Line options={options} data={data}
        width={170}
        height={60}
      />
    </Box>
  );
};

SensorGraph.propTypes = {
  sensorData: PropTypes.array,
};

export default SensorGraph;
