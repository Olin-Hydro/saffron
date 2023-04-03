import { REACT_APP_API_URL, REACT_APP_API_KEY, REACT_APP_URL } from "./config";
import axios from 'axios';

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "x-api-key": REACT_APP_API_KEY,
    "Access-Control-Allow-Origin": REACT_APP_URL,
    "Content-Type": "application/json"
  },
});

const API = {
  getGardens: async () => {
    const response = await instance.get("garden/")
    return response.data as Garden[]
  },
  getGardenByID: async (id: string) => {
    const response = await instance.get("garden/" + id)
    return response.data as Garden
  },

  getSensors: async () => {
    const response = await instance.get("sensor/")
    return response.data as Sensor[]
  },
  getSensorByID: async (id: string) => {
    const response = await instance.get("sensor/" + id)
    return response.data as Sensor
  },

  getScheduledActuators: async () => {
    const response = await instance.get("sa/")
    return response.data as ScheduledActuator[]
  },
  getScheduledActuatorByID: async (id: string) => {
    const response = await instance.get("sa/" + id)
    return response.data as ScheduledActuator
  },
  getReactiveActuators: async () => {
    const response = await instance.get("ra/")
    return response.data as ReactiveActuator[]
  },
  getReactiveActuatorByID: async (id: string) => {
    const response = await instance.get("ra/" + id)
    return response.data as ReactiveActuator
  },

  getCommands: async () => {
    const response = await instance.get("cmd/")
    return response.data as Command[]
  },
  getCommandByID: async (id: string) => {
    const response = await instance.get("cmd/" + id)
    return response.data as Command
  },

  getReadings: async (start: string, end: string) => {
    const response = await instance.get("sensors/logging/")
    return response.data as Reading[]
  },
  getReadingsById: async (sensor_id: string, start: string, end: string) => {
    const response = await instance.get("sensors/logging/" + sensor_id)
    return response.data as Reading[]
  },
  getScheduledActions: async (start: string, end: string) => {
    const response = await instance.get("sa/logging/actions/", {
      params: {
        start: start,
        end: end
      }
    })
    return response.data as ScheduledAction[]
  },
  getScheduledActionByID: async (actuator_id: string, start: string, end: string) => {
    const response = await instance.get("sa/logging/actions/" + actuator_id, {
      params: {
        start: start,
        end: end
      }
    })
    return response.data as ScheduledAction[]
  },

  getReactiveActions: async (start: string, end: string) => {
    const response = await instance.get("ra/logging/actions/", {
      params: {
        start: start,
        end: end
      }
    })
    return response.data as ReactiveAction[]
  },
  getReactiveActionByID: async (actuator_id: string, start: string, end: string) => {
    const response = await instance.get("ra/logging/actions/" + actuator_id, {
      params: {
        start: start,
        end: end
      }
    })
    return response.data as ReactiveAction[]
  },

  getConfigs: async () => {
    const response = await instance.get("config/")
    return response.data as Config[]
  },
  getConfigByID: async (id: string) => {
    const response = await instance.get("config/" + id)
    return response.data as Config
  },
}

export default API;
