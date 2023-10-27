/* A general purpose divider for widgets.
 * Provides a vertical grey line to go between info displays.
 */

import React from "react";
import { Box, Grid } from "@mui/material";

const WidgetDivider = () => {

  return (
    <Grid item>
      <Box sx={{
        border: '1px solid',
        borderColor: "light.main",
        height: '100%',
        width: '0%'
      }} />
    </Grid>
  );
};

export default WidgetDivider;
