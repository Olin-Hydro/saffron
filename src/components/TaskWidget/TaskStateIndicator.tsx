import React from "react";
import PropTypes from "prop-types";
import LoadingButton from '@mui/lab/LoadingButton';
import { Icon } from '@iconify/react';

const TaskStateIndicator = ({taskState}) => {  

  // const getState = ({taskState}) => {
  //   switch (taskState) {
  //     case "running":
          
  //       break;
  //     case "idle":
        
  //       break;
  //     case "warning":
      
  //       break;
  //     case "error":
    
  //       break;
  //     case "offline":

  //       break;
  //     default:
  //       break;
  //   }
  // }
  
  let statusIcon = <Icon icon="fa:circle-o" height="14" color="inherit"/>
  let statusText = "running"
  
  return (
    <LoadingButton 
      variant="statusRunning"
      disabled={true}
      size="small"
      fullWidth
      // TODO: loading spinner logic
      // loading
      loadingPosition="start"
      startIcon={statusIcon}
      >
      {statusText}
      </LoadingButton>
  );
};

TaskStateIndicator.propTypes = {
  taskState: PropTypes.string,
};

export default TaskStateIndicator;


