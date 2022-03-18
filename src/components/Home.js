import { useSensorLogs } from "../hooks/useSensorLogs";
import SensorLinePlot from "./SensorLinePlot";

const Home = () => {
  const phLogs = useSensorLogs("ph").sensorLogs;
  const ecLogs = useSensorLogs("ec").sensorLogs;
  const tempLogs = useSensorLogs("temp").sensorLogs;
  return (
  <div id={"ph"}>
    <SensorLinePlot data={phLogs} dataType={"ph"}></SensorLinePlot>
    <SensorLinePlot data={ecLogs} dataType={"ec"}></SensorLinePlot>
    <SensorLinePlot data={tempLogs} dataType={"temp"}></SensorLinePlot>
  </div>
  )
};

export default Home;
