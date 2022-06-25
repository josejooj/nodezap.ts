import events from "../../types/events";

const obj: events = {
    run: async (client) => {
        console.log(`Agora você está autenticado ao whatsapp-web.js`.format({ tag: 'INFO', color: 'verde' }))
    },
    eventName: "authenticated"
}

export default obj;

/**
 * Evento que é disparado quando você está autenticado em uma
 * conta do WhatsApp, é usado FS para salvar a sessão, assim,
 * você não precisa ler novamente o QR-CODE quando reiniciar o BOT
 */