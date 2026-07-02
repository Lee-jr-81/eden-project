// This file produces sensor readings. Simulated for now, RS485 later. 
// It is used by the edge-hub to get readings from sensors.we should write a scheduler

import type { SensorReading } from './types.js'

//TODO: Replace simulated values with RS485 sensor readings.
export function readSensor(): SensorReading {
    const temperature = 31 + Math.random() * 2; 
    const humidity = 25 + Math.random() * 75; 
    const id = "sensor-001"
    const timestamp = new Date(); 

    return {
        id,
        temperature,
        humidity,
        timestamp
    };
}