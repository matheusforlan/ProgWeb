# Tabuleiro

Em um jogo de tabuleiro, a posição de um jogador é representada
por duas coordenadas inteiras: linha e coluna. Pede-se que você
implemente a lógica de atualização da posição do jogador após
cada jogada, sabendo que em cada jogada, o jogador deve se
movimentar em apena uma das dimensões: ou na linha (seja para a
esquerda ou para a direita), ou na mesma coluna (seja para cima
ou para baixo).

> Importante: espera-se que o programa seja interativo. Ou seja,
> que a cada movimento feito pelo jogador, a posição seja
> atualizada (impressa na saída) pelo programa.

## Entrada

A primeira linha da entrada determina a posição inicial do
jogador e consiste em dois inteiros separados por espaços,
representando linha e coluna, respectivamente. As demais linhas
da entrada contêm os comandos de movimentação do jogador. Cada
linha contém a direção em que o movimento será feito: `E` para
esquerda, `D` para direita, `C` para cima e `B` para baixo.  Por
fim, a última linha da entrada é o comando de saída do programa
que é `X`.

```
10 10
B 11
D 5
E 8
X
```

## Saída

A saída do programa é um texto contendo a posição do jogador após
cada um movimento lido da entrada, formatados como indica o exemplo
abaixo. A última linha da saída indica o total de passos dados
pelo jogador. A listagem abaixo dá um exemplo de saída válida
(correspondente à entrada acima).

```
> 21 10
> 21 15
> 21 7
24
```

## Exemplos de Entrada/Saída

Lembre que o programa precisa ser _interativo_ (que imprima cada
linha de saída assim que o usuário entra o dado do movimento).
Assim, ao executarmos o programa no _shell_, veremos as linhas da
entrada e da saída combinadas, como mostra a transcrição de uma
execução na listagem abaixo.

```
$ node jogo.js
10 10
B 11
> 21 10
D 5
> 21 15
E 8
> 21 7
X
24
$
```
