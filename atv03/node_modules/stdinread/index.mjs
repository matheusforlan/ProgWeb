let timers = [];
let linhas = [];
let closed = false;

process.stdin.on('close', close_handler);
process.stdin.on('data', chunk_handler);

function close_handler() {
    closed = true;
}

function chunk_handler(chunk) {
    let line_part = "";
    for (let i=0; i<chunk.length; i++) {
        let token = String(chunk);
        if (token[i] == "\n") {
            linhas.push(line_part);
            line_part = "";
        }
        else {
            line_part += token[i];
        }
    }
}

function repeat(resolve) {
    if (linhas.length) {
        let linha = linhas.splice(0, 1);
        resolve(linha[0]);
    } else {
        if (closed) {
            resolve(null);
        }
        timers.push(setTimeout(() => {repeat(resolve)}, 10));
    }
}

function readline() {
    return new Promise((resolve, rej) => {
        repeat(resolve);
    });
}

function done() {
    timers.forEach(t => clearTimeout(t));
    process.stdin.removeListener('close', close_handler);
    process.stdin.removeListener('data', chunk_handler);
    process.stdin.pause();
}

export { readline, done };
