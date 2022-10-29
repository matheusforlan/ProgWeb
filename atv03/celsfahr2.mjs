import { readline, done } from 'stdinread';

process.stdout.write("celsius? ");
let celsius = await readline();
let fahrenheit = (9/5) * celsius + 32;
console.log(`fahrenheit: ${fahrenheit.toFixed(1)}`);
done();