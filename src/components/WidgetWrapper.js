import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Grid } from "@mui/material";

const WidgetWrapper = ({ children }) => {  

  return (
    <Card>
      <CardContent>
          <Grid container direction="column">
            {/* TODO: Map children to grid items instead of wrapping individually */}
            {children}
          </Grid>
      </CardContent>
    </Card>
  );
};

// TaskWidget.propTypes = {
//   props: PropTypes.object,
// };

export default WidgetWrapper;
