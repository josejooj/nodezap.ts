import { Client } from "whatsapp-web.js";

export default interface events {
    func: (client: Client, ...any) => Promise<unknown>
    eventName: string
}