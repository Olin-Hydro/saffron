import { useState, useEffect } from "react";
import API from "../TaprootAPI";

const initialLogs = {
  sensorLogs: [],
};

export const useSensorLogs = (type, prevHours) => {
  const [logs, setLogs] = useState(initialLogs);
  const getSensorLogs = async (type, prevHours) => {
    try {
      const logs = await API.getSensorLogs(type, prevHours);
      setLogs((prev) => ({
        ...logs.data.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLogs(initialLogs);
    getSensorLogs(type, prevHours);
  }, [type, prevHours]);
  return logs;
};
