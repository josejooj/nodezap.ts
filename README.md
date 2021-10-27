# <img style='width: 25px; height: 25px' src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png'> nodezap.ts
## O que é?
Criei este repositório para que developers tenham uma base de aplicação em _**[node.js](https://nodejs.org/en/)**_ e _**[TypeScript](https://www.typescriptlang.org/)**_ no desenvolvimento de sistemas no [WhatsApp](https://www.whatsapp.com/?lang=pt_br), como bots 🤖, automação, sistemas de restaurantes, etc...
## Como usar?
> Para começar, você tem de clonar o repositório, abaixo tem um passo a passo por meio do terminal (**Preferencialmente usar PowerShell**)
```cmd
cd desktop
git clone https://github.com/cleiton2040/nodezap.ts/
cd nodezap.ts
npm i
```
Feito isso, você irá adaptar como você vai rodar o código em TypeScript, eu uso um método um pouco lento (`tsc` >> `node .`), então fica livre a você escolher o seu e começar a desenvolver
## Eventos
Como toda boa aplicação em node.js, vamos aproveitar que o node é orientado a eventos, mas nesta aplicação funciona um pouco diferente, ao invés de espalhar um monte `client.on` em todo o código, todos os eventos são organizados e localizados na pasta `src/events`, sendo um arquivo para cada evento, e todos respeitam um padrão de exportação que _deve_ ser seguido, descrito abaixo

```ts
interface events {
    run: (client: WAWebJS.Client, ...any) => Promise<unknown> // Função que é executada quando o evento é disparado
    eventName: string // Nome do evento, é o primeiro parâmetro do client.on
    once?: boolean // true para caso o evento só seja executado 1 vez, como o ready, false ou não declarado para caso o evento seja recorrente, como o message
}
```
> Na prática
```ts
import { Client } from "whatsapp-web.js";
import events from "../../types/events";

const obj: events = {
    run: async (client: Client) => {
      // Essa é a função que é executada quando o evento é disparado
    },
    eventName: "nome do evento, primeiro parâmetro do client.on",
    once: false, // Essa propriedade não é obrigatória
}

export default obj
```

## Livrarias utilizadas
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) - Responsável por mostrar o QR-CODE no terminal)
- [whatsapp-web.js](https://www.npmjs.com/package/@rhaimes/whatsapp-web.js) - Responsável por **tudo** relacionado ao whatsApp, com ela que você vai trabalhar - [Guide](https://guide.wwebjs.dev/) | [Documentação](https://docs.wwebjs.dev/index.html)
