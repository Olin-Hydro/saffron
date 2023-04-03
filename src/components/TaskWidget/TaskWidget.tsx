import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Typography, Grid, SvgIcon, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

import { ReactComponent as PumpIcon } from "../../icons/tasks/pump.svg";
import { ReactComponent as DispenserIcon } from "../../icons/tasks/dispenser.svg";
import { ReactComponent as LightIcon } from "../../icons/tasks/light.svg";

import TaskControlSwitch from "./TaskControlSwitch";
import TaskStateIndicator from "./TaskStateIndicator";

const TaskWidget = ({ taskType, taskState, switchState, avgTime, numCycles }) => {
  const [taskIcon, setTaskIcon] = useState();
  const [taskTitle, setTaskTitle] = useState("Unknown");

  // set props for task type (card title and icon)
  const setTaskTypeProps = (sensorType: string) => {
    switch (sensorType) {
      case "water pump":
        setTaskIcon(PumpIcon as any);
        setTaskTitle("Pump");
        break;
      case "dispenser":
        setTaskIcon(DispenserIcon as any);
        setTaskTitle("Dispenser");
        break;
      case "light":
        setTaskIcon(LightIcon as any);
        setTaskTitle("Light");
        break;
      default:
        setTaskTitle("Unknown");
        break;
    }
  }

  // useEffect with empty dependencies sets component props only when task state changes
  useEffect(() => {
    setTaskTypeProps(taskType);
  }, []);

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
            component={taskIcon as any}
            inheritViewBox
          />
        </Grid>
        <Grid item xs>
          <Typography
            variant="widgetTitle"
            color="text.primary"
          >{taskTitle}</Typography>
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
            switchState={switchState}
            enableSwitch={taskState == "offline"}
          />
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
            >{typeof avgTime === "undefined" ? "--" : avgTime + "s"}</Typography>
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
            >{typeof numCycles === "undefined" ? "--" : numCycles}</Typography>
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
  switchState: PropTypes.number,
  enableSwitch: PropTypes.number,
  avgTime: PropTypes.number,
  numCycles: PropTypes.number,
};

export default TaskWidget;
