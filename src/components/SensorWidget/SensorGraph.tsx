import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const SensorGraph = ({ sensorData }) => {  

  return (
    <Box sx={{ backgroundColor: 'lightGreen.main', borderRadius: 1 }}>
        graph data
    </Box>
  );
};

SensorGraph.propTypes = {
  sensorData: PropTypes.array,
};

export default SensorGraph;
