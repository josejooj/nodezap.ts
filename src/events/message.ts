import { Client, Message } from "whatsapp-web.js";

export default {
    func: (client: Client, message: Message) => {
        // Evento para quando receber mensagens
    },
    eventName: 'message'
}