import { Client, Message } from "whatsapp-web.js";
import events from "../../types/events";

const obj: events = {
    run: async (client: Client, message: Message) => {
        console.log(`[${message.from}] - ${message.body}`)
    },
    eventName: "message",
    once: false,
}


/**
 * Evento que é disparado quando uma mensagem é
 * recebida no cliente em que a aplicação está
 * rodando
 */