// Teste Prático estágio 

// ***     1° Pergunta      ***

function fibonacci(num) { 
    let a = 0, b = 1, temp;
    
    if (num === 0 || num === 1) {
        return `${num} é da sequência de Fibonacci.`;
    }
    
    // faz a sequência de Fibonacci até que o b seja maior ou igual a num
    while (b < num) {
        temp = a;   //guarda o valor de a 
        a = b;      // muda para b
        b = temp + b; // atualiza b para a soma de temp e b
    }
    return b === num ? `${num} é da sequência de Fibonacci.` : `${num} não pertence à sequência de Fibonacci.`;
}

// teste
let numero = 13; // Número a ser verificado
console.log(fibonacci(numero));


// ***     2° Pergunta      ***

function letraA() { 
    let contador = 0;
    let texto = "Ah como eu quero muito entrar nesse estágio maravilhoso :)";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return `A letra 'a' ocorre ${contador} vezes na string.`;
}

// Teste
console.log(letraA());


// ***     3° Pergunta      ***


let INDICE = 12; 
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K = K + 1; 
    SOMA = SOMA + K;
}

console.log("O valor de SOMA é:", SOMA);


// ***     4° Pergunta      ***


/* 

Complete os padrões lógicos:
a) 1, 3, 5, 7, 

Próximo número: 9

b) 2, 4, 8, 16, 32, 64, ____

Próximo número: 128

c) 0, 1, 4, 9, 16, 25, 36, ____

Padrão: Quadrados perfeitos (0², 1², 2², 3², ...).
Próximo número: 49 (7²)

d) 4, 16, 36, 64, ____

Padrão: Quadrados perfeitos multiplicados por 4 (2², 4², 6², 8²...).
Próximo número: 100 (10²)

e) 1, 1, 2, 3, 5, 8, ____

Padrão: Sequência de Fibonacci.
Próximo número: 13

f) 2, 10, 12, 16, 17, 18, 19, ____

Padrão: Mistura de somas de números consecutivos e outros padrões.
Próximo número: 20

*/ 


// ***     5° Pergunta      ***

/* 

Problema dos interruptores e lâmpadas:
Solução:


Eu ligaria o primeiro interruptor e deixaria ligado por alguns minutos
depois desligaria o primeiro interruptor e depois legaria o segundo interruptor
depois iria a sala das lampadas e a lâmpada acesa pertence ao segundo interrupto e a 
lâmpada que está quente mas está apagada pertence ao primeiro interruptor (ela estava ligada e foi desligada antes de você ir à sala).
A lâmpada que está apagada e fria pertence ao terceiro interruptor.
Dessa forma, em duas idas à sala das lâmpadas, você consegue identificar qual interruptor controla cada lâmpada.
"Eu vi isso em um filme :) "

*/ 