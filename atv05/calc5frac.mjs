import { createInterface } from "readline";
import { Fracao } from "./fracoes.mjs";
const rl = createInterface({ input: process.stdin });

for await (const input of rl) {
    let inputElements = input.split(" ");
  
    let operation = inputElements[1];
    let fractionOneElements = inputElements[0].split("/");
    let fractionTwoElements = inputElements[2].split("/");
    let valueOne = new Fracao(
      Number(fractionOneElements[0]),
      Number(fractionOneElements[1])
    );
    let valueTwo = new Fracao(
      Number(fractionTwoElements[0]),
      Number(fractionTwoElements[1])
    );
  
    switch (operation) {
      case "+":
        add(valueOne, valueTwo);
        break;
      case "*":
        multiply(valueOne, valueTwo);
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

function add(valueOne, valueTwo) {
  if (valueOne.denominator === valueTwo.denominator) {
    let finalNumerator = valueOne.numerator + valueTwo.numerator;
    console.log(finalNumerator + "/" + valueOne.denominator);
  } else {
    let mmc = calc_mmc(valueOne.denominator, valueTwo.denominator);

    let numeratorFractionOne =
      valueOne.numerator * (mmc / valueOne.denominator);
    let numeratorFractionTwo =
      valueTwo.numerator * (mmc / valueTwo.denominator);

    let finalNumerator = numeratorFractionOne + numeratorFractionTwo;

    let mdc = calc_mdc(finalNumerator, mmc);

    if (mdc > 1) {
      finalNumerator = finalNumerator / mdc;
      mmc = mmc / mdc;
    }

    console.log(finalNumerator + "/" + mmc);
  }
}

function multiply(valueOne, valueTwo) {
  let finalNumerator = valueOne.numerator * valueTwo.numerator;
  let denominatorResult = valueOne.denominator * valueTwo.denominator;

  console.log(finalNumerator + "/" + denominatorResult);
}

