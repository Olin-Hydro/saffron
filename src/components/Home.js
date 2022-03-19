import { useSensorLogs } from "../hooks/useSensorLogs";
import { useTaskLogs } from "../hooks/useTaskLogs";
import SensorPlot from "./SensorPlot";
import TaskPlot from "./TaskPlot";

const Home = () => {
  const phLogs = useSensorLogs("ph").sensorLogs;
  const ecLogs = useSensorLogs("ec").sensorLogs;
  const tempLogs = useSensorLogs("temp").sensorLogs;
  const taskLogs = useTaskLogs().taskLogs;
  console.log(taskLogs);
  return (
    <div>
      <TaskPlot tasks={taskLogs}></TaskPlot>
      <SensorPlot data={phLogs} dataType={"ph"}></SensorPlot>
      <SensorPlot data={ecLogs} dataType={"ec"}></SensorPlot>
      <SensorPlot data={tempLogs} dataType={"temp"}></SensorPlot>
    </div>
  );
};

export default Home;
