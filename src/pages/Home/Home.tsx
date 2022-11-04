import React from "react";

import WidgetWrapper from "../../components/WidgetWrapper";
import TaskWidget from "../../components/TaskWidget/TaskWidget";
import SensorTaskWrapper from "../../components/SensorTaskWrapper/SensorTaskWrapper";

import { Grid } from '@mui/material';

import SensorWidget from "../../components/SensorWidget/SensorWidget";

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={10}>
      <Grid
        container
        item
        spacing={10}
        direction="row"
        justifyContent="center"
        alignItems="stretch">
        <Grid item>
          <WidgetWrapper>
            <SensorWidget></SensorWidget>
          </WidgetWrapper>
        </Grid>
        <Grid item>
          <WidgetWrapper>
            <SensorWidget></SensorWidget>
            <TaskWidget></TaskWidget>
          </WidgetWrapper>
        </Grid>
        <Grid item>
          <WidgetWrapper>
            <TaskWidget></TaskWidget>
          </WidgetWrapper>
        </Grid>
      </Grid>
      <Grid
        container
        item
        spacing={10}
        direction="row"
        justifyContent="center"
        alignItems="stretch">
        <Grid item>
          <WidgetWrapper>
            <SensorWidget></SensorWidget>
          </WidgetWrapper>
        </Grid>
        <Grid item>
          <WidgetWrapper>
            <SensorWidget></SensorWidget>
            <TaskWidget></TaskWidget>
          </WidgetWrapper>
        </Grid>
        <Grid item>
          <WidgetWrapper>
            <TaskWidget></TaskWidget>
          </WidgetWrapper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
