import moment from "moment";
import { REACT_APP_API_URL } from "./config";
import axios from 'axios';

const headers = {
  "Content-Type": "application/json",
};

const API = {
  getSensorLogs: async (type:string, prevHours?) => {
    let id = '';
    switch (type) {
      case 'test': 
        id = 'blah';
        break;
    }

    return await axios.get(
      REACT_APP_API_URL + 'garden/:' + id,
      {params: { 
        start: new Date(Date.now() - prevHours * 60 * 60 * 1000).toISOString(), 
        limit: 3,
      }}
    ).then((res) => {
      return res.data as LogReading[];
    })
  },
  getTaskLogs: async (prevHours) => {
    let now = moment.utc().format("YYYY-MM-DD HH:mm:ss");
    let prevTime = moment.utc()
      .subtract(prevHours, "hours")
      .format("YYYY-MM-DD HH:mm:ss");
    return await axios.post(
      'REACT_APP_API_URL',
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
