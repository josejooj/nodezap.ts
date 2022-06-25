import { Client } from "whatsapp-web.js";
import events from "../../types/events";
import qrcode from 'qrcode-terminal';

const obj: events = {
    run: async (client: Client, qr: string) => {
        qrcode.generate(qr, { small: true });
    },
    eventName: 'qr',
}

export default obj;

/**
 * Evento responsável por gerar o QR-CODE no terminal
 * quando o processo do node é iniciado e não tem nenhuma
 * sessão válida rodando
 */