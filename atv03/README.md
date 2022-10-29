# Celsius para Fahrenheit

Esta atividade tem o objetivo de colocar você em contato com um
aspecto técnico de programação com JS/Node: o stream de entrada
padrão. Pra deixar mais claro, queremos saber fazer em JS algo
semelhante ao que a função `input()` faz em Python (ou o
`Scanner` em Java).

> Observe que a leitura da entrada padrão só faz sentido em
> JavaScript em ambiente Node e não nos _browsers_, já que no
> _browser_, o código JS não tem acesso direto ao sistema
> operacional, nem ao processo em si. Toda a entrada de dados em
> JS no _browser_ é mediada pelo próprio _browser_ e suas APIs.

## Celsius para Fahrenheit

Para os esquecidos, segue aqui a fórmula para a conversão de
temperaturas Celsius para Fahrenheit.

![F = \frac{9}{5}C + 32](https://render.githubusercontent.com/render/math?math=F%20%3D%20%5Cfrac%7B9%7D%7B5%7DC%20%2B%2032)


## process.stdin

Tal como `process.stdout` é o objeto que dá acesso ao _stream_ de
saída padrão, `process.stdin` dá acesso ao _stream_ de entrada de
um processo Node.

Contudo, a forma de uso de `stdin` é baseada em **primitivas
assíncronas** que requerem código em estilo funcional (aliás,
como praticamente tudo em JavaScript e Node). Para vermos as
alternativas existentes, faremos uma sequência de soluções que
progressivamente abordam as possibilidades de que dispomos.

## celsfahr1.js

Nossa primeira solução será escrita no arquivo `celsfahr1.js`.
Nela, usaremos o módulo `readline` da biblioteca padrão de Node.
Para usá-la, precisaremos adotar o estilo CommonJS de fazer
_imports_.

> Lembre, há dois estilos de módulos para JS: i) CommonJS é o
> estilo de módulos introduzido por Node; e ii) ESM é o estilo
> para os módulos oficiais de JS.

Coloque o código abaixo nas linhas iniciais do programa. Nele,
usamos a função `require()` disponívelem Node para "importar" a
biblioteca `readline`. Em JavaScript tudo é objeto, incluindo os
módulos importados. Por isso, a segunda linha invoca o método
`createInterface()` que é a função que efetivamente cria o objeto
que usaremos para interagir com a entrada padrão.

```javascript
// importa a biblioteca readline
const readline = require('readline');

// cria o objeto que usaremos como interface
const rl = readline.createInterface({ input: process.stdin });
```

Para usar o objeto é preciso criar uma função _callback_ que deve
ser usada para processar o dado lido da entrada. Para isso,
usaremos a função abaixo que recebe uma string que representa o
valor numérico da temperatura em Celsius e que imprime na saída o
valor da temperatura em Fahrenheit.

```javascript
function (celsius) {
    let fahrenheit = (9/5) * celsius + 32;
    console.log(`fahrenheit: ${fahrenheit.toFixed(1)}`);
    rl.close();
}
```

Observe que a função acima é anônima (ou um _lambda_ como são
conhecidas as funções anônimas). O motivo é que usaremos essa
função como um dos argumentos que passaremos para o método
`question()` do objeto `rl` criado anteriormente. O método
`question()` recebe dois argumentos: o primeiro é um prompt que
será impresso na saída antes do ponto em que o cursor é liberado
para o usuário digitar o valor no terminal. E o segundo argumento
é a função que deve ser usada para processar o dado lido. É o que
chamamos de um _callback_, já que é uma função a ser invocada
pela função `question()`, quando o dado tiver sido lido e já
estiver disponível. O formato do código de invocação é este:

```javascript
rl.question('celsius? ', <função callback aqui>);
```

Como na prática essa situação é muito comum e como a função
_callback_ dificilmente poderá ser usada em qualquer outro ponto
do código, é comum que sejam escritas em estilo _aninhado_ (ou
_inlined_) e com a notação _arrow_ de funções. Assim:

```javascript
rl.question('celsius? ', celsius => {
    let fahrenheit = (9/5) * celsius + 32;
    console.log(`fahrenheit: ${fahrenheit.toFixed(1)}`);
    rl.close();
});
```

Codifique o programa `celsfahr1.js` e certifique-se de que passa
nos testes automáticos fornecidos (execute `tst` para rodar os
testes). Esta função deve passar em todos os testes.

## celsfahr1b.js

Nesta versão, usaremos a notação `async` e `await` introduzida em JavaScript na
versão ES6. A ideia por trás dessa notação é fazer o código assíncrono
**parecer** código síncrono, embora **continue sendo assíncrono**. Ao invés de
usar um _callback_ explícito escrito como uma função a ser passada como
argumento, código neste estilo declara quais funções e quais trechos de código
são assíncronos, usando as primitivas `async` e `await`.

O código abaixo demonstra como as primitivas são usadas. Primeiro, `async` é
usada para anotar funções que sejam assíncronas, indicando pra o _runtime_ que
aquela função tem trechos que executam de forma assíncrona. Em seguida, o
`await` é usado para anotar expressões que produzem dados de forma assíncrona.
O ponto do código demarcado pelo `await` indica para o _runtime_ onde a
_thread_ de execução deve ser liberada para aguardar o dado a ser produzido e
onde a execução deve ser retomada, quando o dado estiver disponível. Você pode
pensar em funções `async` como funções que dão pausas na execução para esperar
que certos dados estejam disponíveis e que durante essas pausas, a _thread_
fica disponível para outros trechos do código ou para o _runtime_ de modo
geral.

```javascript
async function conta_linhas() {
    let num = 0;
    for await (const line of rl) {
        num += 1;
        console.log(`:${line}`);
        if (line == 'fim') break;
    }
    console.log(`${num}`);
}
```

Escreva a solução `celsfahr1b.js` baseada na primeira solução, mas de forma que
use o estilo `async` e `await` introduzidos.


## celsfahr2.js

Em nossa segunda versão, usaremos uma outra biblioteca (fora da biblioteca
padrão) que proporciona uma função que faz o mesmo tipo de serviço de ler a
entrada, mas com uma API deliberadamente em estilo assíncrono.

Desta vez, usaremos uma minúscula biblioteca que eu mesmo criei para ilustrar
como programar com `async` e `await` (e para resolver problemas de programação
node em pipes shell): [stdinread](https://www.npmjs.com/package/stdinread).
Comece instalando a biblioteca com o comando `npm i stdinread` (a instalação
não deve ser global, já que se trata de uma biblioteca e não uma ferramenta).

Desta vez, faremos a importação do módulo usando o estilo ESM, com o comando
`import` de JS. Este é o estilo mais moderno e preferível para novos projetos.
Use a linha abaixo para importar as duas funções que precisamos para nosso
propósito.

```javascript
import { readline, done } from 'stdinread';
```

Para quem vem de linguagens como Python e Java, imagino que esta linha de
código seja mais clara e compreensível que o estilo CommonJS. Ela deixa
explícito que estamos "importando" dois objetos com os nomes `readline` e
`done` da biblioteca `stdinread`.

Para que esse código funcione, contudo, o programa precisa ser reconhecido como
um _módulo ES6_ por Node (na verdade, veremos que no _browser_ isso também é
necessário). Para isso, temos duas opções: 1) renomeamos o módulo e usamos a
extensão `.mjs` para o arquivo; ou 2) adicionamos a propriedade `"type":
"module"` ao arquivo `package.json` (que você pode criar manualmente, se não
existir). Sem uma dessas duas opções, Node não reconhecerá o programa como um
módulo ES6 e vai reclamar do comando `import`.  Isso ocorre porque o padrão
para modularização em Node é usar a função `require()` do estilo CommonJS.

Antes de prosseguir, rode testes com esse arquivo contendo apenas essa linha e
garanta que Node está reconhecendo o arquivo como um módulo ES6.

Para usar a função, você precisa apenas invocar `readline()`.  Contudo, por se
tratar de função assíncrona, sua invocação precisa ser precedida da
palavra-chave `await`. Isso faz a execução do restante do código ser
interrompida até que a função `readline()` retorne de seu funcionamento.
Observe que apesar de ser assíncrona, o uso de `await` nos permite pensar no
código como se ele fosse síncrono, facilitando bastante a codificação e
compreensão do código. O código pode ficar assim.

```javascript
process.stdout.write("celsius? ");
let celsius = await readline();
let fahrenheit = (9/5) * celsius + 32;
console.log(`fahrenheit: ${fahrenheit.toFixed(1)}`);
done();
```

> Observe que neste código não precisamos do `async`. Isto só é possível porque
> o _runtime_ reconhece o módulo como sendo ES6.

A primeira linha apenas imprime o _prompt_ para o usuário no
terminal. A segunda é quem efetivamente invoca a função de
leitura da entrada. As duas linhas seguines dispensam
explicações. Por fim, a última linha (o `done()`) é necessária
para encerrar a espera por dados vindos do _stream_ de entrada
padrão. Isso é necessário para evitar que o programa fique
"travado" em um loop eterno lendo dados da entrada (ainda que sem
processá-los).

Faça um teste você mesmo: crie o arquivo completo da solução
`celsfahr2.js` e comente essa última linha. Você deve observar
que o node continuará lendo a entrada até que ela explicitamente
acabe. Para fazer isso, você precisará digitar Ctrl-D
explicitamente no terminal.

