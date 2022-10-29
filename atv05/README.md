# Frações

Escreva um script JS/Node que simule uma pequena calculadora de
frações. Apenas com as operações de soma e multiplicação precisam
ser implementadas. Além disso, apenas somas e multiplicações de
duas frações de cada vez devem ser suportadas. A calculadora deve
sempre fornecer a fração resultante reduzida (ou simplificada).

## Entrada

A entrada do programa consiste em uma sequência de linhas
contendo operações com duas frações. As operações podem ser
apenas de soma (`+`) e de multiplicação (`*`). A seguir um
exemplo de entrada válida.

```
1/2 + 3/4
1/2 * 3/4
5/4 + 6/8
```

## Saída

A saída do programa deve conter exatamente o mesmo número de
linhas lidas da entrada. Cada linha deve conter a fração
resultante simplificada que representa o resultado da operação
na linha correspondente da entrada. Abaixo, por exemplo, está a
saída correspondente à entrada acima.

```
5/4
3/8
2/1
```

Veja o arquivo `testes.yaml` para ver outros exemplos de entrada e
saída.


## Design das soluções

Você deve implementar quatro soluções para este problema.
Obviamente, você poderá reaproveitar boa parte do código entre
elas. As diferenças ficarão por conta do design de cada uma.

### calcfrac1.mjs

Sua primeira solução deve usar objetos simples de JS e
programação funcional pura. Escreva uma função _factory_
`crie_fracao()` que crie e retorne objetos que representem
frações. Os objetos devem incluir seus dados e métodos. Nesta
solução, você não deve usar nenhuma das palavras-chave
relacionadas à orientação a objetos baseada em classes
incorporadas a JavaScript, tais como `new`, `class` ou `this`.
Sugestão: crie os métodos `add()`, `prod()` e `reduced()` que
retornem novas frações e que implementem as respectivas
operações.


### calcfrac2.mjs

Sua segunda solução deve usar a sintaxe da orientação a objetos
baseada em classes que foi incluída nas versões modernas de
JavaScript. Nesta solução, portanto, você pode e deve usar as
palavras-chave `class`, `constructor`, `this` e `new` para criar
a classe de objetos que modela frações. Tal como na versão
anterior, crie os mesmos métodos indicados.

### fracoes3.mjs

Nesta terceira solução, use o _design pattern_ **classe**
clássico, usado em JavaScript, antes da introdução da sintaxe da
palavra-chave `class`. Observe que esta solução é algo
intermediário entre a versão funcional, pura e a versão OO
baseada em classes, já que se trata de um _design pattern_ para
simular o conceito de classes. Nesta versão, contudo, você
precisará das palavras-chave: `this`, `new` e `prototype`.

### calcfrac4.mjs

Por fim, faça uma pequena variação da solução 1 em que o código
da _factory_ será colocado em um módulo separado, de forma que o
código cliente possa ser isolado do código que provê a abstração
de _frações_. Para isso, você só precisa criar dois arquivos:
`calcfrac4.mjs` (este arquivo/módulo irá conter o código cliente)
e `fracoes.mjs` (este irá conter o código da _factory_ que
proporciona a abstração de _frações_). Obviamente, o código
cliente precisará importar a _factory_ para poder usá-lo.
Pesquisa sobre o comando `import` e descubra qual a forma
apropriada de fazer a importação.


### fracoes5.mjs

Copie o código da `class Fracao` para o arquivo `fracoes.mjs` e crie
a solução `calcfrac5.mjs` que deve importar a classe e usá-la na
solução do problema. Observe que o mesmo módulo que exportará a
função _factory_ `cria_fracao` vai exportar também a classe
`Fracao`.

## Passe nos testes

Faça todos os módulos principais funcionarem corretamente. Ao
final, execute os testes automáticos. Todos os módulos que
implementem a lógica cliente devem passar nos testes automáticos
executados via `tst`. A saída deve ser algo semelhante a isto.
Observe que, no meu caso, apenas o módulo `fracoes.mjs` não passa
nos testes, dado que ela é um módulo auxiliar e não contém a
solução em si do problema.

```
$ tst
calcfrac1.mjs ...         
calcfrac2.mjs ...         
calcfrac3.mjs ...         
calcfrac4.mjs ...          
calcfrac5.mjs ...          
fracoes.mjs   FFF
$
```
