// This files wires everything together. This is the main program. 
// it is responsible for starting the edge hub and initializing all the other modules.

import { startLogger } from "./logger.js";
import { startScheduler } from "./scheduler.js";

console.log("Eden edge-hub starting...");

startLogger();
startScheduler();

console.log("Eden edge-hub running.");