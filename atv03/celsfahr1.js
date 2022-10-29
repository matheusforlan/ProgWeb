// importa a biblioteca readline
const readline = require('readline');

// cria o objeto que usaremos como interface
const rl = readline.createInterface({ input: process.stdin });


rl.question('celsius? ', celsius => {
    let fahrenheit = (9/5) * celsius + 32;
    console.log(`fahrenheit: ${fahrenheit.toFixed(1)}`);
    rl.close();
});