import { useTaskLogs } from "../hooks/useTaskLogs";
import { useSensorLogs } from "../hooks/useSensorLogs";
import SensorPlot from "./SensorPlot";
import TaskPlot from "./TaskPlot";
import SensorStats from "./SensorStats";
import TaskStats from "./TaskStats";

const Home = () => {
  let prevHours = 24;
  const taskLogs = useTaskLogs(prevHours).taskLogs;
  const pastDayph = useSensorLogs("ph", prevHours).sensorLogs;
  const pastDayec = useSensorLogs("ec", prevHours).sensorLogs;
  const pastDaytemp = useSensorLogs("temp", prevHours).sensorLogs;
  return (
    <div>
      <div>
        <SensorStats
          phLogs={pastDayph}
          ecLogs={pastDayec}
          tempLogs={pastDaytemp}
          prevHours={prevHours}
        ></SensorStats>
        <TaskStats taskLogs={taskLogs} prevHours={prevHours}></TaskStats>
      </div>
      <TaskPlot tasks={taskLogs}></TaskPlot>
      <SensorPlot data={pastDayph} dataType={"ph"}></SensorPlot>
      <SensorPlot data={pastDayec} dataType={"ec"}></SensorPlot>
      <SensorPlot data={pastDaytemp} dataType={"temp"}></SensorPlot>
    </div>
  );
};

export default Home;
