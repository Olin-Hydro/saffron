import React from "react";
import {
    useSensors,
    useSensorData,
    useSensorWidgets
} from "../../hooks/useSensors"
import {
    useScheduledActuators,
    useScheduledActuatorData,
    useScheduledActuatorWidgets,
    useReactiveActuators,
    useReactiveActuatorData,
    useReactiveActuatorWidgets
} from "../../hooks/useActuators"

import { Grid } from '@mui/material';

const DashboardDisplay = ({ garden_id }) => {
    // TODO: make configurable and default to 24H from current time
    const readings_start = "2000-03-19T22:16:56.020969-0400"
    const readings_stop = "2025-03-19T22:16:56.020969-0400"

    const sensors = useSensors(garden_id)
    const sensorData = useSensorData(sensors.data, readings_start, readings_stop)
    const sensorWidgets = useSensorWidgets(sensors.data, sensorData.data)

    const scheduledActuators = useScheduledActuators(garden_id)
    const scheduledActuatorData = useScheduledActuatorData(scheduledActuators.data, readings_start, readings_stop)
    const scheduledActuatorWidgets = useScheduledActuatorWidgets(scheduledActuators.data, scheduledActuatorData.data)

    const reactiveActuators = useReactiveActuators(garden_id)
    const reactiveActuatorData = useReactiveActuatorData(reactiveActuators.data, readings_start, readings_stop)
    const reactiveActuatorWidgets = useReactiveActuatorWidgets(reactiveActuators.data, reactiveActuatorData.data)

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={10}
            px={8.3}
            maxWidth={{ xs: "40em", md: "xl" }}
            mx="auto">
            <Grid
                container
                item
                spacing={10}
                direction="row"
                justifyContent="start"
                alignItems="stretch">
                {sensorWidgets.data}
            </Grid>
            <Grid
                container
                item
                spacing={10}
                direction="row"
                justifyContent="start"
                alignItems="stretch">
                {scheduledActuatorWidgets.data}
            </Grid>
            <Grid
                container
                item
                spacing={10}
                direction="row"
                justifyContent="start"
                alignItems="stretch">
                {reactiveActuatorWidgets.data}
            </Grid>
        </Grid>
    );
};

export default DashboardDisplay;
