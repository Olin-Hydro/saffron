
interface Sensor {
    id: string;
    name: string;
    garden_id: string;
    created_at:string;
}

interface SchActuator {
    id: string;
    name: string;
    garden_id: string;
    created_at:string;
}

interface ReactiveActuator {
    id: string;
    name: string;
    sensor_id: string;
    created_at:string;
}

interface Garden {
    id: string;
    name: string; 
    config: OpConfig; 
    location: string; 
    created_at: string;
}


interface LogReading {
    id: string;
    sensor_id: string;
    value: number;
    created_at: string;
}

interface Action {
    id: string;
    actuator_id: string;
    data: string;
    created_at:string;
}

interface OpConfig {
    id: string;
    name: string; 
    sensors: SSchedule[];
    scheduled_actuators: SASchedule[];
    reactive_actuators: RASchedule[];
    created_at: string;
}

interface SSchedule {
    S_id: string;
    interval: number;
}

interface SASchedule {
    SA_id: string;
    on: any[];
    off: any[];
}

interface RASchedule {
    RA_id: string;
    interval: number;
    threshold: number;
    duration: number;
    threshold_type: number;
}

