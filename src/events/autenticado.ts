import { Client, ClientSession } from "whatsapp-web.js";
import events from "../../types/events";
import { sessionPath } from '../sessionManager';
import { writeFileSync } from 'fs'

const obj: events = {
    run: async (client: Client, session: ClientSession) => {
        writeFileSync(sessionPath, JSON.stringify(session));
    },
    eventName: "authenticated",
    once: true,
}

/**
 * Evento que é disparado quando você está autenticado em uma
 * conta do WhatsApp, é usado FS para salvar a sessão, assim,
 * você não precisa ler novamente o QR-CODE quando reiniciar o BOT
 */