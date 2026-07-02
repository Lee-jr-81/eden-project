// Prints events to the console so i can see the system working.

import { eventBus } from "./eventBus.js";
import type { SensorReadingCreated } from "./types.js";

export function startLogger(): void {
  eventBus.on("SensorReadingCreated", (event: SensorReadingCreated) => {
    console.log("Sensor reading created");
    console.log(`Sensor: ${event.payload.id}`);
    console.log(`Temperature: ${event.payload.temperature.toFixed(2)}°C`);
    console.log(`Humidity: ${event.payload.humidity.toFixed(2)}%`);
    console.log(`Reading time: ${event.payload.timestamp.toISOString()}`);
    console.log("---");
  });
}