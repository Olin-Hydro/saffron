import { useState, useEffect } from "react";
import API from "../TaprootAPI";

const initialLogs = {
  sensorLogs: [],
};

export const useSensorLogs = (type) => {
  const [logs, setLogs] = useState(initialLogs);
  const getSensorLogs = async (type) => {
    try {
      const logs = await API.getSensorLogs(type);
      setLogs((prev) => ({
        ...logs.data.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLogs(initialLogs);
    getSensorLogs(type);
  }, [type]);
  return logs;
};
