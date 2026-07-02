// This file decides when sensors are read and when readings are sent to the database. 
// It is used by the edge-hub to schedule sensor readings and database writes.

import {eventBus} from './eventBus.js'
import { readSensor } from './sensors.js'
import { createSensorReadingEvent } from './eventFactory.js'

export function startScheduler(): void  {
    // Every 10 seconds, read sensor, create event, emit event.
    console.log("Scheduler started. Reading sensors every 10 seconds.");
    setInterval(() => {
        console.log("Tick")
        const reading = readSensor();
        const event = createSensorReadingEvent(reading);
        eventBus.emit(event.eventName, event);
    }, 10_000); 
}