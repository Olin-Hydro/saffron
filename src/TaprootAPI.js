import moment from "moment";
import { REACT_APP_API_URL } from "./config";
const axios = require("axios");

const headers = {
  "Content-Type": "application/json",
};

const API = {
  getSensorLogs: async (type, prevHours) => {
    let now = moment.utc().format("YYYY-MM-DD HH:mm:ss");
    let prevTime = moment.utc()
      .subtract(prevHours, "hours")
      .format("YYYY-MM-DD HH:mm:ss");
    return await axios.post(
      REACT_APP_API_URL,
      {
        query: `query getSenseLogs($type:String, $startTime:TimeStamp, $endTime:TimeStamp){
          sensorLogs(type:$type, startTime:$startTime, endTime:$endTime) {
            id
            type
            data
            createdAt
          }
        }`,
        variables: {
          type: type,
          startTime: { datetime: prevTime },
          endTime: { datetime: now },
        },
      },
      {
        headers: headers,
      }
    );
  },
  getTaskLogs: async (prevHours) => {
    let now = moment.utc().format("YYYY-MM-DD HH:mm:ss");
    let prevTime = moment.utc()
      .subtract(prevHours, "hours")
      .format("YYYY-MM-DD HH:mm:ss");
    return await axios.post(
      REACT_APP_API_URL,
      {
        query: `query getTaskLogs($startTime:TimeStamp, $endTime:TimeStamp){
          taskLogs(startTime:$startTime, endTime:$endTime) {
            id
            type
            data
            createdAt
          }
        }`,
        variables: {
          startTime: { datetime: prevTime },
          endTime: { datetime: now },
        },
      },
      {
        headers: headers,
      }
    );
  },
};

export default API;
