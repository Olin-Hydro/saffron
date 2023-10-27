import React from "react";
import { useState, useEffect } from "react";
import { Grid } from '@mui/material';

import { useGardens } from "../hooks/useGardens"

import DashboardDisplay from "../components/DashboardDisplay/DashboardDisplay";

const Dashboard = () => {
  const gardens = useGardens()
  const first_garden = gardens.data[0]
  let current_garden_id = ""
  try {
    current_garden_id = first_garden._id
  } catch (error) {
  }

  return (
    <Grid>
      <DashboardDisplay garden_id={current_garden_id} />
    </Grid>
  );
};

export default Dashboard;
