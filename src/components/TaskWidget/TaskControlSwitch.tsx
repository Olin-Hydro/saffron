import React from "react";
import PropTypes from "prop-types";
import LoadingButton from '@mui/lab/LoadingButton';
import { Icon } from '@iconify/react';

const TaskControlSwitch = ({enableSwitch}) => {  

  return (
    <LoadingButton 
      variant="outlined"
      size="small"
      style={{ borderWidth: 3 }}
      // TODO: loading spinner logic
      // loading
      loadingPosition="start"
      startIcon={<Icon icon="fontisto:power" height="14" />}>
        {enableSwitch ? "Turn On" : "Turn Off"}
      </LoadingButton>
  );
};

TaskControlSwitch.propTypes = {
  enableSwitch: PropTypes.string,
};

export default TaskControlSwitch;
