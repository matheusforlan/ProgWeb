# Hello, World!

O objetivo desta atividade é apenas que você conheça como
funciona a programação com JavaScript em Node e o ambiente de
testes que usaremos. A atividade inclui testes automáticos tst
(veja o arquivo `public_tests.yaml`). Logo, a atividade consiste
em criar dois arquivos resposta (`hello1.js` e `hello2.js`; ver
detalhes abaixo) e em executar os testes automáticos fornecidos
(usando o `tst`).

## Especificação

Escreva o clássico _Hello, World!_ em JavaScript como seu
primeiro programa. Como você sabe, trata-se de um programa mínimo
que apenas escreve a frase `Hello, World!` na saída padrão do
processo. De fato, você escreverá duas versões. Siga as
instruções abaixo, para cada uma delas.

## hello1.js

No arquivo `hello1.js` use a função `console.log()` para escrever
na saída padrão (ou _imprimir_, como costumamos dizer). Essa
função também pode ser usada em código JS que deva ser executado
em _browsers_ (nesse caso, a saída deve ser observada em uma área
especial denominada _console_, acessada nos principais _browsers_
com F12).


## hello2.js

No arquivo `hello2.js` usaremos a função `process.stdout.write()`
para escrever na saída padrão. Esta função é exclusiva do
_runtime_ Node e **não está disponível em browsers**. O objeto
`process` é um objeto global que não precisa ser importado e que
está disponível em todo processo que execute o Node. Já o objeto
`process.stdout` é o objeto pelo qual podemos ter acesso ao
_stream_ de saída padrão do processo (o equivalente ao `stdout`
em C, ao `sys.stdout` em Python e `System.out` em Java).

> Observação. A função `stdout.write()` não adiciona um `\n'
> automaticamente, como `console.log()` faz. Logo, você precisa
> incluir o caractere no seu programa, pra que funcione como se
> espera.

## execute os testes

Para executar os testes, execute `tst`. Se tudo der certo, você
deve ver o seguinte padrão na saída.

```
$ tst
hello1.js .......         
hello2.js .......
```
