// So the testing mindset is...
// 1. GIVEN. a sensorReading.
// 2. WHEN. createSensorReadingEvent runs.
// 3. THEN. it returns the correct event shape.

import {describe, expect, it} from 'vitest'
import { createSensorReadingEvent } from './eventFactory.js'
import type { SensorReading } from './types.js' 


describe('createSensorReadingEvent', () => {
    it('should return the correct event shape', () => {

        // GIVEN. a sensorReading.
        const reading: SensorReading = {
            id: 'sensor-001',
            temperature: 32,
            humidity: 75,
            timestamp: new Date()
        };

        // WHEN. createSensorReadingEvent runs.
        const event = createSensorReadingEvent(reading);


        // THEN. it returns the correct event shape.
        expect(event.eventName).toBe('SensorReadingCreated');
        expect(event.payload).toEqual(reading);
        expect(event.timestamp).toBeInstanceOf(Date);
    });
});
