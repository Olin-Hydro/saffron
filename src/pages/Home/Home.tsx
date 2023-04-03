import React from "react";
import { useState, useEffect } from "react";
import { Grid } from '@mui/material';

import { useGardens } from "../../hooks/useGardens"

import Dashboard from "../../components/Dashboard/Dashboard";

const Home = () => {
  const gardens = useGardens()
  const first_garden = gardens.data[0]
  let current_garden_id = ""
  try {
    current_garden_id = first_garden._id
  } catch (error) {
  }

  return (
    <Grid>
      {<Dashboard garden_id={current_garden_id} />}
    </Grid>
  );
};

export default Home;
