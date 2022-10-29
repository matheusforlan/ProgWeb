const readline = require("readline");
const input = readline.createInterface({ input: process.stdin });

input.question("Posição Inicial: ", (initialPosition) => {
  var position = initialPosition.split(" ");
  position[0] = Number(position[0]);
  position[1] = Number(position[1]);
  var countSteps = 0;

  chessboard(position, countSteps);
});

async function chessboard(position, countSteps) {
  for await (const instruction of input) {

    let movement = instruction.split(" ");
    let direction = movement[0];
    let steps = movement[1] ? Number(movement[1]) : 0;

    if (direction === "C"){
      countSteps += steps;
      position[0] -= steps;
      toString(position[0], position[1]);    
    }

    if (direction === "B"){
      countSteps += steps;
      position[0] += steps;
      toString(position[0], position[1]);     
    }

    if (direction === "D"){
      countSteps += steps;
      position[1] += steps;
      toString(position[0], position[1]);      
    }

    if (direction === "E"){
      countSteps += steps;
      position[1] -= steps; 
      toString(position[0], position[1]);    
    }

    if (direction === "X") {
      console.log(countSteps);
      break;
    }
  }
}

function toString(columnPosition, linePosition) {
  console.log( "> " + columnPosition + " " + linePosition);
}