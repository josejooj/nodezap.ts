import WAWebJS from "whatsapp-web.js";

export default interface events {
    run: (client: WAWebJS.Client, ...any) => Promise<unknown>
    eventName: string
    once?: boolean
} as 