import { Client } from "whatsapp-web.js"; //@ts-ignore
import { generate } from 'qrcode-terminal';

export default {
    func: (client: Client, qr: string) => {
        generate(qr, { small: true })
    },
    eventName: 'qr'
}