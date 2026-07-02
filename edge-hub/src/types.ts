// This file contains the types used in the edge-hub. It is used to define the types of the events that are emitted by the edge-hub.

export interface SensorReading {
    id: string
    timestamp: Date;
    temperature: number;
    humidity: number;

}

export interface SensorReadingCreated {
    eventName: 'SensorReadingCreated';
    payload: SensorReading;
    timestamp: Date;

}