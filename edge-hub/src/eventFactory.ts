// What is the purpose of this file?
// To take a SensorReading and build a SensorReadingCreated event.
import type { SensorReading, SensorReadingCreated } from './types.js'

export function createSensorReadingEvent (sensorReading: SensorReading): SensorReadingCreated {

    return {
        eventName: 'SensorReadingCreated',
        payload: sensorReading,
        timestamp: new Date()
    }
}