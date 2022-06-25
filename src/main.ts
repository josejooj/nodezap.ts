import { Client, LocalAuth } from 'whatsapp-web.js';
import { readdirSync } from 'fs';
import events from '../types/events';
import './Prototypes';

const client = new Client({ authStrategy: new LocalAuth({ dataPath: './session'}), qrMaxRetries: 3 })

for (let x of readdirSync('./dist/events')) {
    const { run, eventName } = require('./events/' + x).default as events
    client.on(eventName, run.bind(null, client))
}

client.initialize();

/**
 * O loop é responsável por inicializar os eventos na pasta ./events/, assim
 * basta você adicionar um novo evento e seguir o padrão de exportação descrito
 * no README.md https://github.com/cleiton2040/node-whatsapp/blob/main/README.md
*/
