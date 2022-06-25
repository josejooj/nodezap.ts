import { Client } from "whatsapp-web.js";
import events from "../../types/events";

const obj: events = {
    run: async (client: Client) => {
        console.log("Estou online e pronto para ação".format({ tag: 'INFO', color: 'verde'}))
    },
    eventName: "ready",
}

export default obj

/**
 * Evento disparado assim que o bot está 100% online e funcional.
 */