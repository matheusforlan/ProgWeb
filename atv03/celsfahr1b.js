const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });

async function ConverterAsync() {
    await rl.question('celsius? ', celsius => {
        let fahrenheit = (9/5) * celsius + 32;
        console.log(`fahrenheit: ${fahrenheit.toFixed(1)}`);
        rl.close();
    });
}
ConverterAsync();