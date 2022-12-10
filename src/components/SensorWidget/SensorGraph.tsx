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
import { faker } from '@faker-js/faker';

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
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      xAxis: {
        display: false //this will remove only the label
      }
    }
  };

  const labels = ['', '', '', '', '', '', '', '', '', '', ''];
  const data = {
    labels,
    datasets: [
      {
        label: '',
        xAxisID: 'xAxis',
        data: labels.map(() => faker.datatype.number({ min: 20, max: 50 })),
        borderColor: '#2DD886',
        backgroundColor: '#2DD886',
      },
    ],
  };



  return (
    <Box sx={{ backgroundColor: 'lightGreen.main', borderRadius: 1 }}>
      <Line options={options} data={data}
        width={170}
        height={60}
      />;
    </Box>
  );
};

SensorGraph.propTypes = {
  sensorData: PropTypes.array,
};

export default SensorGraph;
