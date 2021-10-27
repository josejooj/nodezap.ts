import { Client } from "whatsapp-web.js";
import events from "../../types/events"; //@ts-ignore
import { generate } from 'qrcode-terminal';

const obj: events = {
    run: async (client: Client, qr: string) => {
        generate(qr, { small: true })
    },
    eventName: 'qr',
    once: true
}

/**
 * Evento responsável por gerar o QR-CODE no terminal
 * quando o processo do node é iniciado e não tem nenhuma
 * sessão válida rodando
 */