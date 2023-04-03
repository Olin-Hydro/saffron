import React from "react";
import { useState, useEffect } from "react";

import { Grid } from '@mui/material';

import WidgetWrapper from "../components/WidgetWrapper";
import SensorWidget from "../components/SensorWidget/SensorWidget";

import API from "../HydrangeaAPI";

export const useSensors = (garden_id: string) => {
  const [data, setData] = useState<Sensor[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await API.getSensors()
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

export const useSensorData = (sensors: Sensor[], readings_start: string, readings_end: string) => {
  const [data, setData] = useState<Array<Array<Reading>>>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await Promise.allSettled(sensors.map(sensor => {
          return API.getReadingsById(sensor._id, readings_start, readings_end)
        })).then(results => {
          return results.map(result => {
            if (result.status == 'fulfilled') {
              return result.value
            } else {
              return [] as Reading[]
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
  }, [sensors]);

  return { data, error, loaded };
};

export const useSensorWidgets = (sensors: Sensor[], sensorsData: Reading[][]) => {
  const [data, setData] = useState<JSX.Element[]>([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let data: JSX.Element[] = []
        sensorsData.forEach(singleSensorData => {
          if (singleSensorData.length) {
            const currentSensor = sensors.filter(sensor => {
              return sensor._id === singleSensorData[0].sensor_id
            })[0]

            data.push(
              <Grid key={currentSensor._id} item order={{ md: 2 }}>
                <WidgetWrapper>
                  <SensorWidget sensorType={currentSensor.name} sensorData={singleSensorData} />
                </WidgetWrapper>
              </Grid>
            )
          }
        })
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [sensors, sensorsData]);

  return { data, error, loaded };

};