import React from "react";
import PropTypes from "prop-types";
import { Typography, Stack, Grid, SvgIcon, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { ReactComponent as ECIcon } from "../../icons/ec.svg";

import TaskControlSwitch from "./TaskControlSwitch";
import TaskStateIndicator from "./TaskStateIndicator.js";

const TaskWidget = ({ taskType, taskState, enableSwitch, avgTime, numCycles }) => {

  return (
    <Grid item sx={{ height: '12em', width: '12em'}}>
      <Stack spacing={7}>
        {/* title */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs="auto">
            {/* TODO: add logic for icon selection here */}
            <SvgIcon
              component={ECIcon}
              inheritViewBox
              fontSize="small"
            />
          </Grid>
          <Grid item xs>
            <Typography
              variant="widgetTitle"
              color="text.primary"
            >Title</Typography>
          </Grid>
          <Grid item xs="auto">
            <IconButton aria-label="settings">
              <SettingsIcon
                color="light"
                fontSize="small"
              ></SettingsIcon>
            </IconButton>
          </Grid>
        </Grid>
        {/* Task controls */}
        <Stack spacing={7}>
          <TaskStateIndicator>
            taskState={taskState}
          </TaskStateIndicator>
          <TaskControlSwitch
            enableSwitch={enableSwitch}>
          </TaskControlSwitch>
        </Stack>
        {/* Numerical Stats */}
        <Stack gap={1}>
          <Grid container alignItems="left">
            <Grid item>
              <Typography
                variant="widgetStatSmall"
                color="text.secondary"
              >{avgTime}s</Typography>
              <Typography
                variant="widgetStatLabel"
                color="text.light"
              > avg dispense time</Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="left">
            <Grid item>
              <Typography
                variant="widgetStatSmall"
                color="text.secondary"
              >{numCycles}</Typography>
              <Typography
                variant="widgetStatLabel"
                color="text.light"
              > cycles run today</Typography>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Grid>
  );
};

TaskWidget.propTypes = {
  taskType: PropTypes.string,
  taskState: PropTypes.string,
  enableSwitch: PropTypes.number,
  avgTime: PropTypes.number,
  numCycles: PropTypes.number,
};

export default TaskWidget;
