import fs from 'fs';

declare global {
    interface String {
        format: (options: { 
            color?: 'vermelho' | 'verde' | 'amarelo' | 'azul_escuro' | 'roxo' | 'azul'
            styles?: ('nada' | 'negrito' | 'apagado' | 'italico' | 'sublinhado')[],
            tag?: string
        }) => string
    }
}

const format = {
    color: {
        nada: '29m',
        vermelho: '31m',
        verde: '32m',
        amarelo: '33m',
        azul_escuro: '34m',
        roxo: '35m',
        azul: '36m'
    },
    styles: {
        nada: '00',
        negrito: '01',
        apagado: '02',
        italico: '03',
        sublinhado: '04'
    }
}

String.prototype.format = function ({ color, styles, tag }) {

    let formated = tag? `\x1b[01;${format.color[color || 'nada']}[${tag}] - \x1b[00;0m\x1b[`:'\x1b['

    if (styles && styles.length != 0) styles.map(x => formated += format.styles[x] + ';');
    if (color) formated += format.color[color];

    return formated + this + '\x1b[00;0m';

}