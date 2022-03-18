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
        query: `query getLogs($type:String){
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
};

export default API;
