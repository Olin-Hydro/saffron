import React, { useState, useEffect } from 'react';
import { Typography, Grid, SvgIcon, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

import { ReactComponent as PumpIcon } from "../../icons/tasks/pump.svg";
import { ReactComponent as DispenserIcon } from "../../icons/tasks/dispenser.svg";
import { ReactComponent as LightIcon } from "../../icons/tasks/light.svg";

import TaskControlSwitch from "./TaskControlSwitch";
import TaskStateIndicator from "./TaskStateIndicator";

const TaskWidget = ({ taskName, taskType, taskState, switchState, avgTime, numCycles }) => {
  const [taskIcon, setTaskIcon] = useState();
  const [taskTitle, setTaskTitle] = useState("Unknown");

  // set props for task type (card title and icon)
  // useEffect with empty dependencies means it only updates at start
  useEffect(() => {
    setTaskTitle(taskName);
    switch (taskType) {
      case "pump":
        setTaskIcon(PumpIcon as any);
        break;
      case "dispenser":
        setTaskIcon(DispenserIcon as any);
        break;
      case "light":
        setTaskIcon(LightIcon as any);
        break;
      default:
        setTaskTitle("Unknown");
        break;
    }
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
          <TaskStateIndicator
            taskState={taskState}
          />
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

export default TaskWidget;
