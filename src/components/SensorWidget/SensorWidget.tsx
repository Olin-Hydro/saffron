import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Grid, Typography, IconButton, SvgIcon } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import ReactComponent from 'react';
import { ReactComponent as TempIcon } from "../../icons/sensors/temp.svg";
import { ReactComponent as PHIcon } from "../../icons/sensors/ph.svg";
import { ReactComponent as LevelIcon } from "../../icons/sensors/level.svg";
import { ReactComponent as ECIcon } from "../../icons/sensors/ec.svg";

import { ReactComponent as BlankUnitIcon } from "../../icons/units/unit-blank.svg";
import { ReactComponent as FUnitIcon } from "../../icons/units/unit-F.svg"; 
import { ReactComponent as CUnitIcon } from "../../icons/units/unit-C.svg";
import { ReactComponent as LevelUnitIcon } from "../../icons/units/unit-in-h2o.svg";
import { ReactComponent as ECUnitIcon } from "../../icons/units/unit-ms-cm.svg";
import { ReactComponent as PHUnitIcon } from "../../icons/units/unit-ph.svg";

import SensorGraph from "./SensorGraph"
import { useSensorLogs } from "../../hooks/useSensorLogs";

const SensorWidget = ({ sensorType, sensorData, sensorState }) => {
  const sensorLogs = useSensorLogs(sensorType, 24).sensorLogs;
  const mean = sensorLogs.reduce((sum, reading) => sum + reading.value, 0) / sensorLogs.length;
  const min = Math.min(...sensorLogs.map(log => log.value))
  const max = Math.max(...sensorLogs.map(log => log.value))

  const [sensorTitle, setSensorTitle] = useState("Unknown");
  const [sensorIcon, setSensorIcon] = useState();
  const [sensorUnitIcon, setSensorUnitIcon] = useState();

  const setSensorTypeProps = (sensorType: string) => {
    switch (sensorType) {
      case "temp":
        // TODO: add Fahrenheight conversion
        setSensorIcon(TempIcon as any);
        setSensorTitle("Temp");
        setSensorUnitIcon(CUnitIcon as any)
        break;
      case "ph":
        setSensorIcon(PHIcon as any);
        setSensorTitle("PH");
        setSensorUnitIcon(PHUnitIcon as any)
        break;
      case "level":
        setSensorIcon(LevelIcon as any);
        setSensorTitle("Level");
        setSensorUnitIcon(LevelUnitIcon as any)
        break;
      case "ec":
        setSensorIcon(ECIcon as any);
        setSensorTitle("EC");
        setSensorUnitIcon(ECUnitIcon as any)
        break;
      default:
        setSensorTitle("Unknown");
        setSensorUnitIcon(BlankUnitIcon as any)
        break;
    }
  }

  // useEffect with empty dependencies sets component props only when task state changes
  useEffect(() => {
    setSensorTypeProps("");
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
        container
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={5}
        mt={-7}
      >
        <Grid item xs="auto">
          <SvgIcon
            component={sensorIcon as any}
            inheritViewBox
          />
        </Grid>
        <Grid item xs>
          <Typography
            variant="widgetTitle"
            color="text.primary"
          >{sensorTitle}</Typography>
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
      <Grid
        item
      >
        <SensorGraph sensorData={sensorData}></SensorGraph>
      </Grid>
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
            container
            marginBottom={-9}
            justifyContent="center"
            alignItems="baseline"
          >
            <Grid
            item>
            <Typography
              variant="widgetStat"
              color="text.light"
            >{mean || "--"}</Typography>
            </Grid>
            <Grid item>
              <SvgIcon
                component={sensorUnitIcon as any}
                inheritViewBox
              />
            </Grid>
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
              >{isFinite(max) ? max : "--"}</Typography>
            </Grid>
            <Grid item>
              <SvgIcon
                component={sensorUnitIcon as any}
                inheritViewBox
              />
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
              >{isFinite(min) || "--"}</Typography>
            </Grid>
            <Grid item>
              <SvgIcon
                component={sensorUnitIcon as any}
                inheritViewBox
              />
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
