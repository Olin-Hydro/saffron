import { useState, useEffect } from "react";
import API from "../TaprootAPI";

const initialLogs = {
  taskLogs: [],
};

export const useTaskLogs = (prevHours) => {
  const [logs, setLogs] = useState(initialLogs);
  const getTaskLogs = async (prevHours) => {
    try {
      const logs = await API.getTaskLogs(prevHours);
      setLogs((prev) => ({
        ...logs.data.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLogs(initialLogs);
    getTaskLogs(prevHours);
  }, [prevHours]);
  return logs;
};
