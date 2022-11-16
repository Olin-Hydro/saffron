import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid, SvgIcon, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { ReactComponent as ECIcon } from "../../icons/ec.svg";

import TaskControlSwitch from "./TaskControlSwitch";
import TaskStateIndicator from "./TaskStateIndicator";

const TaskWidget = ({ taskType, taskState, enableSwitch, avgTime, numCycles }) => {

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
        item
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
            <SettingsIcon
              color="light"
              fontSize="small"
            ></SettingsIcon>
          </IconButton>
        </Grid>
      </Grid>
      {/* Task controls */}
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={5}
      >
        <Grid item>
          <TaskStateIndicator>
            taskState={taskState}
          </TaskStateIndicator>
        </Grid>
        <Grid item>
          <TaskControlSwitch
            enableSwitch={enableSwitch} />
        </Grid>
      </Grid>
      {/* Numerical Stats */}
      <Grid
        item
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="stretch"
      >
        <Grid
          item
          container
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid item my={-10}>
            <Typography
              variant="widgetStatSmall"
              color="text.light"
            >#s</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="widgetStatLabel"
              color="text.light">avg dispense time</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid item my={-10}>
            <Typography
              variant="widgetStatSmall"
              color="text.light"
            >#</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="widgetStatLabel"
              color="text.light">cycles run today</Typography>
          </Grid>
        </Grid>
      </Grid>
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
