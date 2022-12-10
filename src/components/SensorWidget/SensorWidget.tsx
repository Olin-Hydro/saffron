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
      sx={{ height: '13em', width: '13em' }}
    >
      {/* title */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={5}
        mt={-7}
      >
        <Grid item xs="auto">
          {/* TODO: add logic for icon selection here */}
          <SvgIcon
            component={ECIcon}
            inheritViewBox
          />
        </Grid>
        <Grid item xs>
          <Typography
            variant="widgetTitle"
            color="text.primary"
          >Title</Typography>
        </Grid>
        <Grid item xs="auto">
          <IconButton
            aria-label="settings"
            sx={{ mx: '-.35em' }}
          >
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
        justifyContent="center"
        alignItems="flex-end"
        spacing={5}
      >
        {/* Avg stat */}
        <Grid
          container
          item
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
          xs={6}
        >
          <Grid
            item
            marginBottom={-9}
          >
            <Typography
              variant="widgetStat"
              color="text.light"
            >{typeof mean === "undefined" ? "--" : mean}</Typography>
          </Grid>
          <Grid
            item
          >
            <Typography
              variant="widgetStatLabel"
              color="text.light"
              align="center">mean</Typography>
          </Grid>
        </Grid>
        {/* hi / lo stats */}
        <Grid
          item
          container
          xs={6}
          direction="column"
          justifyContent="flex-end"
          alignItems="center">
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="widgetStatLabel"
                color="text.light">hi</Typography>
            </Grid>
            <Grid item my={-10}>
              <Typography
                variant="widgetStatSmall"
                color="text.light"
              >{typeof max === "undefined" ? "--" : max}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="widgetStatLabel"
                color="text.light">lo</Typography>
            </Grid>
            <Grid item my={-10}>
              <Typography
                variant="widgetStatSmall"
                color="text.light"
              >{typeof min === "undefined" ? "--" : min}</Typography>
            </Grid>
          </Grid>
        </Grid>
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
