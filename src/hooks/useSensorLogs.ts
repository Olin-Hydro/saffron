import { useState, useEffect } from "react";
import API from "../TaprootAPI";

const initialLogs = {
  sensorLogs: [] as LogReading[],
};

export const useSensorLogs = (type:string, prevHours:number) => {
  const [logs, setLogs] = useState(initialLogs);
  const getSensorLogs = async (type:string, prevHours:number) => {
    try {
      const logs = await API.getSensorLogs(type, prevHours);
      setLogs((prev) => ({
        sensorLogs: logs,
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
