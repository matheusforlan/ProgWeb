export function crie_fracao(frac) {
  let fracao = {};

  let fracElements = frac.split("/");

  fracao.numerator = Number(fracElements[0]);
  fracao.denominator = Number(fracElements[1]);

  return fracao;
}

export class Fracao {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
}