import React from "react";
import PropTypes from "prop-types";
import LoadingButton from '@mui/lab/LoadingButton';
import { Icon } from '@iconify/react';

const TaskControlSwitch = ({ enableSwitch }) => {

  return (
    <LoadingButton
      variant="switchOff"
      size="small"
      fullWidth
      // TODO: loading spinner logic
      loadingPosition="start"
      startIcon={
        <Icon
          icon="fontisto:power"
          height="14"
          color="inherit"
        />
      }>
      {enableSwitch ? "Turn On" : "Turn Off"}
    </LoadingButton>
  );
};

TaskControlSwitch.propTypes = {
  enableSwitch: PropTypes.string,
};

export default TaskControlSwitch;
