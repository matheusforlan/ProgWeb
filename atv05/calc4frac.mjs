import { createInterface } from "readline";
import { crie_fracao } from "./fracoes.mjs";
const rl = createInterface({ input: process.stdin });

for await (const operation of rl) {
    let operationElements = operation.split(" ");
  
    let op = operationElements[1];
    let fractionOne = crie_fracao(operationElements[0]);
    let fractionTwo = crie_fracao(operationElements[2]);
  
    switch (op) {
      case "+":
        add(fractionOne, fractionTwo);
        break;
      case "*":
        multiply(fractionOne, fractionTwo);
        break;
    }
  }

function calc_mmc(n1, n2) {
  var rest, x, y;
  x = n1;
  y = n2;
  while (rest != 0) {
    rest = x % y;
    x = y;
    y = rest;
  }
  return (n1 * n2) / x;
}

function calc_mdc(n1, n2) {
  var rest;

  do {
    rest = n1 % n2;

    n1 = n2;
    n2 = rest;
  } while (rest != 0);

  return n1;
}

function add(fractionOne, fractionTwo) {
  if (fractionOne.denominator === fractionTwo.denominator) {
    let finalNumerator = fractionOne.numerator + fractionTwo.numerator;
    console.log(finalNumerator + "/" + fractionOne.denominator);
  } else {
    let mmc = calc_mmc(fractionOne.denominator, fractionTwo.denominator);

    let numeratorFractionOne =
      fractionOne.numerator * (mmc / fractionOne.denominator);
    let numeratorFractionTwo =
      fractionTwo.numerator * (mmc / fractionTwo.denominator);

    let finalNumerator = numeratorFractionOne + numeratorFractionTwo;

    let mdc = calc_mdc(finalNumerator, mmc);

    if (mdc > 1) {
      finalNumerator = finalNumerator/mdc;
      mmc = mmc/mdc;
    }

    console.log(finalNumerator + "/" + mmc);
  }
}

function multiply(fractionOne, fractionTwo) {
  let finalNumerator = fractionOne.numerator * fractionTwo.numerator;
  let denominatorResult = fractionOne.denominator * fractionTwo.denominator;

  console.log(finalNumerator + "/" + denominatorResult);
}

