import React, { useState, useEffect } from 'react';
import { Chip } from "@mui/material";
import { Icon } from '@iconify/react';

const TaskStateIndicator = ({ taskState }) => {
  // setup state for chip variant, label, and icon
  const [variant, setVariant] = useState("offline");
  const [label, setLabel] = useState("offline");
  const [icon, setIcon] = useState(<Icon icon="fa:circle-o" height="14" style={{ color: "rgba(0,0,0,.1)" }} />);

  // depending on task state, set chip variant, label, and icon
  const setComponentProps = (state: string) => {
    switch (state) {
      case "running":
        setVariant("running")
        setLabel("running")
        setIcon(<Icon icon="fa:circle" height="14" style={{ color: "rgba(0,0,0,.1)" }} />)
        break
      case "idle":
        setVariant("idle")
        setLabel("idle")
        setIcon(<Icon icon="fa:circle-o" height="14" style={{ color: "rgba(0,0,0,.1)" }} />)
        break
      case "warning":
        setVariant("warning")
        setLabel("warning")
        setIcon(<Icon icon="fa:circle" height="14" style={{ color: "rgba(0,0,0,.1)" }} />)
        break
      case "error":
        setVariant("error")
        setLabel("error")
        setIcon(<Icon icon="fa:circle" height="14" style={{ color: "rgba(0,0,0,.1)" }} />)
        break
      default:
        setVariant("offline")
        setLabel("offline")
        setIcon(<Icon icon="fa:circle-o" height="14" style={{ color: "rgba(0,0,0,.1)" }} />)
        break
    }
  }

  // useEffect with empty dependencies sets component props only when task state changes
  useEffect(() => {
    setComponentProps(taskState);
  }, []);

  return (
    <Chip
      style={{ width: '100%' }}
      variant={variant as any} // cast to any for now; should implement an interface in the future
      label={label}
      icon={icon}
    />
  );
};

export default TaskStateIndicator;
