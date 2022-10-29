import { createInterface } from "readline";
const rl = createInterface({ input: process.stdin });

for await (const input of rl) {
    let inputElements = input.split(" ");
  
    let operation = inputElements[1];
    let valueOne = crie_fracao(inputElements[0]);
    let valueTwo = crie_fracao(inputElements[2]);
  
    switch (operation) {
      case "+":
        add(valueOne, valueTwo);
        break;
      case "*":
        multiply(valueOne, valueTwo);
        break;
    }
  }

function crie_fracao(frac) {
  let fraction = {};

  let separatedFraction = frac.split("/");

  fraction.numerator = Number(separatedFraction[0]);
  fraction.denominator = Number(separatedFraction[1]);

  return fraction;
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
      finalNumerator = finalNumerator/mdc;
      mmc = mmc/mdc;
    }

    console.log(finalNumerator + "/" + mmc);
  }
}

function multiply(valueOne, valueTwo) {
  let finalNumerator = valueOne.numerator * valueTwo.numerator;
  let denominatorResult = valueOne.denominator * valueTwo.denominator;

  console.log(finalNumerator + "/" + denominatorResult);
}

