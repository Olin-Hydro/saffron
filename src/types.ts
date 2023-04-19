
interface Command {
    _id: string;
    cmd: number;
    type: string;
    garden_id: string;
    created_at: string;
    updated_at: string;
}

interface Config {
    _id: string;
    name: string;
    sensor_schedule: SensorSchedule[];
    ra_actuators: RASchedule[];
    sa_schedule: SASchedule[];
    created_at: string;
    updated_at: string;
}

interface ConfigUpdate {
    name: string;
    sensor_schedule: SensorSchedule[];
    ra_actuators: RASchedule[];
    sa_schedule: SASchedule[];
}

interface Garden {
    _id: string;
    name: string;
    location: string;
    config_id: string;
    created_at: string;
    updated_at: string;
}

interface GardenUpdate {
    name: string;
    location: string;
    config_id: string;
}

interface HTTPValidationError {
    detail: ValidationError[]
}

interface RASchedule {
    ra_id: string;
    interval: number;
    threshold: number;
    duration: number;
    threshold_type: number;
}

interface RAUpdate {
    name: string
}

interface ReactiveAction {
    _id: string;
    actuator_id: string;
    data: string;
    created_at: string;
    updated_at: string;
}

interface ReactiveActuator {
    _id: string;
    name: string;
    type: string;
    sensor_id: string;
    created_at: string;
    updated_at: string;
}

interface Reading {
    _id: string;
    sensor_id: string;
    value: number;
    created_at: string;
    updated_at: string;
}

interface SASchedule {
    sa_id: string;
    on: string[];
    off: string[];
}

interface SAUpdate {
    name: string;
}

interface ScheduledAction {
    _id: string;
    actuator_id: string;
    data: string;
    created_at: string;
    updated_at: string;
}

interface ScheduledActuator {
    _id: string;
    name: string;
    type: string;
    garden_id: string;
    created_at: string;
    updated_at: string;
}

interface Sensor {
    _id: string;
    name: string;
    type: string;
    garden_id: string;
    created_at: string;
    updated_at: string;
}

interface SensorSchedule {
    sensor_id: string;
    interval: number
}

interface ValidationError {
    loc: string[];
    msg: string;
    type: string;
}