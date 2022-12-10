import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import LoadingButton from '@mui/lab/LoadingButton';
import { Icon } from '@iconify/react';

// when switchState is true, show "Turn Off" text
// When enableSwitch is false, disable switch
const TaskControlSwitch = ({ switchState, enableSwitch }) => {

  return (
    <LoadingButton
      variant="outlined"
      size="small"
      style={{ borderWidth: 3 }}
      fullWidth
      // TODO: loading spinner logic
      // loading
      loadingPosition="start"
      startIcon={<Icon icon="fontisto:power" height="14" />}
      disabled={enableSwitch}
    >
      {switchState ? "Turn Off" : "Turn On"}
    </LoadingButton>
  );
};

TaskControlSwitch.propTypes = {
  enableSwitch: PropTypes.bool,
};

export default TaskControlSwitch;
