import { Message } from "whatsapp-web.js";
import events from "../../types/events";

const obj: events = {
    run: async (client, message: Message) => {
        console.log(`${message.body}`.format({ tag: message.from, color: 'verde' }))
    },
    eventName: "message",
}

export default obj;

/**
 * Evento que é disparado quando uma mensagem é
 * recebida no cliente em que a aplicação está
 * rodando
 */