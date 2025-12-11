/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-12-11
* @fileoverview This program keeps track of car stats
*/

function oilChange(mileage: number, oilChangeKM: number): boolean {
  // This function will check to see if your car needs an oil change
  // and return the necessary responses, as well as update the variables.

  if (mileage - oilChangeKM >= 5000) {
    console.log("An oil change was done.");
    return true;
  } else {
    return false;
  }
}

// Constants and variables
let odometer: number = 65000;       // mileage of Car
let oilChangeKM: number = 65000;    // value since the last oil change
let carColor: string = "Blue";      // color of Car
const carModel: string = "Corolla";   // model of Car
const carMake: string = "Toyota";     // new variable for car make
let newMileage: number = 0.0;       // new mileage amount
const gasCost: number[] = new Array(10); // cost of gas per fill up
let fillUps: number = 0;            // how many fill-ups were recorded

// Functions
function carStats(): string {
  return "Make: " + carMake +
    "\nModel: " + carModel +
    "\nColour: " + carColor +
    "\nOdometer: " + odometer +
    "\nLast Oil Change At: " + oilChangeKM +
    "\nFill-Ups Recorded: " + fillUps;
}

function wrapCar(): string {
  const colour = prompt("Enter a colour to wrap your car: ") || "Unknown";
  return colour;
}

function drive(): number {
  // random number between 100 and 1000
  const distance = Math.floor(Math.random() * 901) + 100;

  // update odometer
  odometer = odometer + distance;

  return distance;
}

function fillUp(): void {
  const costInput = prompt("Enter gas fill-up cost: ") || "0";
  const cost = parseFloat(costInput);

  if (fillUps < gasCost.length) {
    gasCost[fillUps] = cost;
    fillUps = fillUps + 1;
  }
}

function displayCostToFillUp(): number {
  let total = 0;

  console.log("\nGas Fill-Up Costs:");
  for (let i = 0; i < fillUps; i++) {
    console.log("Fill-up " + (i + 1) + ": $" + gasCost[i]);
    total = total + gasCost[i];
  }

  const average = total / fillUps;
  console.log("Average fill-up cost: $" + average);

  return average;
}


// set first fill up cost
gasCost[0] = 74.00;
fillUps = 1;

console.log("Initial Car Stats:\n" + carStats());

// wrap (change colour)
carColor = wrapCar();

// drive the car
const kmDriven = drive();
console.log("You drove " + kmDriven + " km.");
console.log("New odometer reading: " + odometer);

// check for oil change
const needsChange = oilChange(odometer, oilChangeKM);

if (needsChange == true) {
  oilChangeKM = odometer;
} else {
  console.log("Your car does not need an oil change.");
}

// fill up gas
fillUp();

// display fill up history + average
const avgCost = displayCostToFillUp();
console.log("Average cost to fill up: $" + avgCost);

console.log("\nUpdated Car Stats:\n" + carStats());

console.log("\nDone.");