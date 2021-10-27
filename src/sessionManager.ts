import { Client } from 'whatsapp-web.js';
import session from '../types/session'
import { readFileSync } from 'fs';

const sessionPath = process.cwd() + '/session.json';
const sessionData = JSON.parse(readFileSync(sessionPath).toString()) as session;
const client = new Client({ session: sessionData })

export {
    client,
    sessionPath
}

/**
 * Arquivo responsável por instanciar a classe Client, e
 * restaurar a sessão antiga, sem ter que botar o qrcode novamente,
 * sempre que precisar usar a constante client, basta importar
 */