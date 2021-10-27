import { client } from './sessionManager'
import { readdirSync } from 'fs';
import events from '../types/events';

for (let x of readdirSync('./dist/events')) {
    const { run, eventName, once } = require('./events/' + x).default as events
    client[once ? 'once' : 'on']?.(eventName, run.bind(null, client))
}

client.initialize();

    /**
     * O loop é responsável por inicializar os eventos na pasta ./events/, assim
     * basta você adicionar um novo evento e seguir o padrão de exportação descrito
     * no README.md https://github.com/cleiton2040/node-whatsapp/blob/main/README.md
     */
