import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, IconButton, SvgIcon } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ReactComponent as ECIcon } from "../../icons/ec.svg";

import SensorGraph from "./SensorGraph"

const SensorWidget = ({ sensorType, sensorData, mean, min, max, sensorState }) => {

  return (
    // Top level grid item is necessary here because this item fits into a grid
    <Grid
      container
      item
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
      xs="auto">
      {/* title */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={5}
      >
        <Grid
          item
          xs="auto">
          {/* TODO: add logic for icon selection here */}
          <SvgIcon
            component={ECIcon}
            inheritViewBox
            fontSize="small"
          />
        </Grid>
        <Grid
          item
          xs>
          <Typography
            variant="widgetTitle"
            color="text.primary">Title</Typography>
        </Grid>
        <Grid
          item
          xs="auto">
          <IconButton aria-label="settings">
            <OpenInNewIcon
              color="light"
              fontSize="small"
            ></OpenInNewIcon>
          </IconButton>
        </Grid>
      </Grid>
      {/* Graph */}
      <SensorGraph sensorData={sensorData}></SensorGraph>
      {/* Numerical stats area */}
      <Grid
        container
        item
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
        spacing={5}>
        {/* Avg stat */}
        <Grid
          item
          direction="column"
          justifyContent="flex-end"
          alignItems="center">
          <Grid
            item
            align="center"
            marginBottom={-8}>
            <Typography
              variant="widgetStat"
              color="text.light">
              ###
            </Typography>
          </Grid>
          <Grid
            item
            align="center">
            <Typography
              variant="widgetStatLabel"
              color="text.light">mean</Typography>
          </Grid>
          {/* </Grid> */}
        </Grid>
        {/* hi / lo stats */}
        <Grid
          item
          direction="column"
          justifyContent="flex-end"
          alignItems="center">
          <Grid
            item
            align="center">
            <Typography
              variant="widgetStatLabel"
              color="text.light">hi </Typography>
            <Typography
              variant="widgetStatSmall"
              color="text.light">###</Typography>
          </Grid>
          <Grid
            item
            align="center">
            <Typography
              variant="widgetStatLabel"
              color="text.light">lo </Typography>
            {/* To-do update the widgetStatSmall to have same text baseline as label */}
            <Typography
              variant="widgetStatSmall"
              color="text.light"
            >###</Typography>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>
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
