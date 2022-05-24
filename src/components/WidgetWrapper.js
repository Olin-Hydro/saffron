import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent } from "@mui/material";

const WidgetWrapper = ({ children }) => {  

  return (
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

// TaskWidget.propTypes = {
//   props: PropTypes.object,
// };

export default WidgetWrapper;
