import React from "react";
import { Grid } from '@mui/material';

import WidgetWrapper from "../../components/WidgetWrapper";
import WidgetDivider from "../../components/WidgetDivider";
import TaskWidget from "../../components/TaskWidget/TaskWidget";
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
            <WidgetDivider></WidgetDivider>
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
            <WidgetDivider></WidgetDivider>
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
