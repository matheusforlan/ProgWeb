# stdinread

A simple, minimalistic approach to read lines from
`process.stdin` in node scripts that need to deal with unix shell
pipes. Unfortunately, the standard `readline` module is not
appropriated in such cases, as it deals directly with terminals
(tty) and not with the acutal standard input.

While this is not a synchronous solution, it provides a
javascript promise and, as such, it can be used with `await`,
making it very appropriate to write sync like code, similar to
Python's `input()`.

## Installation and use

Install with `npm i stdinread`. To use, import `readline` and
`done`. The first function returns a promise (thus, use `await`).
Call the second function when you are done reading the input. It
performs a clean up and _pauses_ the stream. Unfortunately, this
is necessary to pause the reader stream and allow the process to
terminate.

Import the module, using ES6 syntax (remember, your module must
be an ES6 module; use `"type": "module"` in `package.json` or use
the `mjs` extension in your module). Call `readline()` with
`await` to read lines from `stdin`. Once you're done, call
`done()`. The code below imitates `cat` to demonstrate how the
module is used.

```javascript
import { readline, done } from 'stdinread';

while (true) {
    let line = await readline();
    if (line == null) break;
    console.log(line);
}

done();
```
