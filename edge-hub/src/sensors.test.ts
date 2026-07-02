import {describe, expect, it} from 'vitest';
import {readSensor} from './sensors.js';

describe('readSensor', () => {
    it('should return a sensor reading with the correct shape', () => {
         //WHEN
        const reading = readSensor();

       
        // THEN.
        expect(reading).toHaveProperty('id');
        expect(reading).toHaveProperty('temperature');
        expect(reading).toHaveProperty('humidity');
        expect(reading).toHaveProperty('timestamp');

        expect(reading.temperature).toBeGreaterThanOrEqual(31);
        expect(reading.temperature).toBeLessThanOrEqual(33);
        expect(reading.humidity).toBeGreaterThanOrEqual(25);
        expect(reading.humidity).toBeLessThanOrEqual(100);
    });
});