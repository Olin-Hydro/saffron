import React from "react";
import { useState, useEffect } from "react";

import { Grid } from '@mui/material';

import WidgetWrapper from "../components/WidgetWrapper";
import TaskWidget from "../components/TaskWidget/TaskWidget";

import API from "../HydrangeaAPI";

export const useScheduledActuators = (garden_id: string) => {
  const [data, setData] = useState<ScheduledActuator[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await API.getScheduledActuators()
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { data, error, loaded };
};

export const useReactiveActuators = (garden_id: string) => {
  const [data, setData] = useState<ReactiveActuator[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await API.getReactiveActuators()
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { data, error, loaded };
};

export const useScheduledActuatorData = (scheduledActuators: ScheduledActuator[], readings_start: string, readings_end: string) => {
  const [data, setData] = useState<Array<Array<ScheduledAction>>>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await Promise.allSettled(scheduledActuators.map(scheduledActuator => {
          return API.getScheduledActionByID(scheduledActuator._id, readings_start, readings_end)
        })).then(results => {
          return results.map(result => {
            if (result.status == 'fulfilled') {
              return result.value
            } else {
              return [] as ScheduledAction[]
            }
          })
        })
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [scheduledActuators]);

  return { data, error, loaded };
};

export const useReactiveActuatorData = (reactiveActuators: ReactiveActuator[], readings_start: string, readings_end: string) => {
  const [data, setData] = useState<Array<Array<ReactiveAction>>>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await Promise.allSettled(reactiveActuators.map(reactiveActuator => {
          return API.getReactiveActionByID(reactiveActuator._id, readings_start, readings_end)
        })).then(results => {
          return results.map(result => {
            if (result.status == 'fulfilled') {
              return result.value
            } else {
              return [] as ReactiveAction[]
            }
          })
        })
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [reactiveActuators]);

  return { data, error, loaded };
};

export const useScheduledActuatorWidgets = (scheduledActuators: ScheduledActuator[], scheduledActuatorsData: ScheduledAction[][]) => {
  const [data, setData] = useState<JSX.Element[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = scheduledActuators.map(singleScheduledActuatorData => {
          const currentScheduledActuator = scheduledActuators.filter(actuator => {
            return actuator._id === singleScheduledActuatorData._id
          })[0]
          return (
            <Grid key={currentScheduledActuator._id} item order={{ md: 2 }}>
              <WidgetWrapper>
                <TaskWidget
                  taskName={currentScheduledActuator.name}
                  taskType={currentScheduledActuator.type}
                  taskState={"online"}
                  switchState={false}
                  avgTime={undefined}
                  numCycles={undefined}
                />
              </WidgetWrapper>
            </Grid>
          )
        })
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [scheduledActuators, scheduledActuatorsData]);

  return { data, error, loaded };
};

export const useReactiveActuatorWidgets = (reactiveActuators: ReactiveActuator[], reactiveActuatorsData: ReactiveAction[][]) => {
  const [data, setData] = useState<JSX.Element[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = reactiveActuators.map(singleReactiveActuatorData => {
          const currentReactiveActuator = reactiveActuators.filter(actuator => {
            return actuator._id === singleReactiveActuatorData._id
          })[0]
          return (
            <Grid key={currentReactiveActuator._id} item order={{ md: 2 }}>
              <WidgetWrapper>
                <TaskWidget
                  taskName={currentReactiveActuator.name}
                  taskType={currentReactiveActuator.type}
                  taskState={"online"}
                  switchState={false}
                  avgTime={undefined}
                  numCycles={undefined}
                />
              </WidgetWrapper>
            </Grid>
          )
        })
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [reactiveActuators, reactiveActuatorsData]);

  return { data, error, loaded };
};