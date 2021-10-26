import { client } from './sessionManager'
import { readdirSync } from 'fs';
import events from '../types/events';

for (let x of readdirSync('./dist/events')) {
    const { func, eventName} = require('./events/' + x).default as events
    client.on(eventName, func.bind(null, client))
}

client.initialize();