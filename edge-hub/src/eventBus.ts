// What is the purpose of this file?
// To create a central event bus for handling and emitting events.

import { EventEmitter} from 'node:events';

export const eventBus = new EventEmitter()