import { useState, useEffect } from "react";
import API from "../TaprootAPI";

const initialLogs = {
  taskLogs: [],
};

export const useTaskLogs = () => {
  const [logs, setLogs] = useState(initialLogs);
  const getTaskLogs = async () => {
    try {
      const logs = await API.getTaskLogs();
      setLogs((prev) => ({
        ...logs.data.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLogs(initialLogs);
    getTaskLogs();
  }, []);
  return logs;
};