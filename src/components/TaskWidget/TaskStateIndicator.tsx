import React from "react";
import PropTypes from "prop-types";
import { Chip } from "@mui/material";
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
  
  // let statusIcon = <Icon icon="fa:circle" height="14" />
  let statusIcon = <Icon icon="fa:circle-o" height="14" style={{color: "rgba(0,0,0,.2)"}}/>
  let statusText = "running"
  
  return (
    <Chip
    style={{width: '100%'}}
    icon={statusIcon}
    label={statusText}
    variant="running"
    />
  );
};

TaskStateIndicator.propTypes = {
  taskState: PropTypes.string,
};

export default TaskStateIndicator;
