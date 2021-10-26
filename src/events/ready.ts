import { Client } from "whatsapp-web.js";

export default {
    func: (client: Client) => {
        console.log("Estou online")
    },
    eventName: "ready"
}