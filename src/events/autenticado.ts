import { writeFileSync } from 'fs';
import { Client, ClientSession } from 'whatsapp-web.js';
import { sessionPath } from '../sessionManager';

export default {
    func: (client: Client, session: ClientSession) => {
        writeFileSync(sessionPath, JSON.stringify(session));
    },
    eventName: 'authenticated'
}