import { REACT_APP_API_URL } from "./config";
const axios = require("axios");

const headers = {
  "Content-Type": "application/json",
};

const API = {
  getSensorLogs: async (type) => {
    return await axios.post(
      REACT_APP_API_URL,
      {
        query: `query getSenseLogs($type:String){
          sensorLogs(type:$type) {
            id
            type
            data
            createdAt
          }
        }`,
        variables: {
          type: type,
        },
      },
      {
        headers: headers,
      }
    );
  },
  getTaskLogs: async () => {
    return await axios.post(
      REACT_APP_API_URL,
      {
        query: `query getTaskLogs{
          taskLogs {
            id
            type
            data
            createdAt
          }
        }`,
      },
      {
        headers: headers,
      }
    );
  },
};

export default API;
