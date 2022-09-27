import React from "react";
import PropTypes from "prop-types";
import { Grid, Stack, Typography, IconButton, SvgIcon } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ReactComponent as ECIcon } from "../../icons/ec.svg";
  
import SensorGraph from "./SensorGraph"

const SensorWidget = ({ sensorType, sensorData, mean, min, max, sensorState }) => {  

  return (
    <Grid item xs="auto">
      <Stack spacing={7} xs="auto">
        {/* title */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs="auto">
            {/* TODO: add logic for icon selection here */}
            <SvgIcon component={ECIcon} inheritViewBox />
          </Grid>
          <Grid item xs>
            <Typography variant="widgetTitle" color="text.primary">Title</Typography>
          </Grid>
          <Grid item xs="auto">
            <IconButton aria-label="settings">
              <OpenInNewIcon color="light"></OpenInNewIcon>
            </IconButton>
          </Grid>
        </Grid>
        {/* Graph */}
          <SensorGraph sensorData={sensorData}></SensorGraph>
        {/* Numerical stats */}
        <Grid container spacing={5}>
          {/* Avg stat */}
          <Grid item direction="column">
            <Grid item>
              <Typography variant="widgetStat" color="text.light">###</Typography>
            </Grid>
            <Grid item>
              <Typography variant="widgetStatLabel" color="text.light">mean</Typography>
            </Grid>
          </Grid>
          {/* hi / lo stats */}
          <Grid item direction="column">
            <Grid item >
              <Typography variant="widgetStatLabel" color="text.light">hi </Typography>
              <Typography variant="widgetStatSmall" color="text.light">###</Typography>
            </Grid>
            <Grid item>
              <Typography variant="widgetStatLabel" color="text.light">lo </Typography>
              <Typography variant="widgetStatSmall" color="text.light">###</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Grid>
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
