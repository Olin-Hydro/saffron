/* A general purpose wrapper for widgets.
 * Provides a white box and a grid structure to populate with items
 */

import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid } from "@mui/material";

const WidgetWrapper = ({ children }) => {  

  return (
    <Card>
      {/* Todo: override CardContent bottom padding in theme.ts */}
      <CardContent sx={{ '&:last-child': { pb: 8 }}}>
      {/* <CardContent> */}
          <Grid 
            container
            direction="row"
            justifyContent="space-between"
            spacing={13}
            >
            {children}
          </Grid>
      </CardContent>
    </Card>
  );
};

WidgetWrapper.propTypes = {
  props: PropTypes.object,
};

export default WidgetWrapper;
