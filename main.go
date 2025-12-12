/**
 * @author Evan Maddicks
 * @version 1.0.0
 * @date 2025-12-11
 * @fileoverview This program keeps track of car stats
 */

package main

import (
	"fmt"
	"math/rand"
)

func oilChange(mileage int, lastOilChange int) bool {
	// Check if 5000 km has passed
	if mileage-lastOilChange >= 5000 {
		fmt.Println("An oil change was done.")
		return true
	}
	return false
}

// Variables
var odometer int = 65000
var oilChangeKM int = 65000
var carColor string = "Blue"
var carMake string = "Toyota"
var carModel string = "Corolla"
var gasCost []float64
var fillUps int = 0

func carStats() string {
	return "Make: " + carMake +
		"\nModel: " + carModel +
		"\nColour: " + carColor +
		"\nOdometer: " + fmt.Sprint(odometer) +
		"\nLast Oil Change At: " + fmt.Sprint(oilChangeKM) +
		"\nFill-Ups Recorded: " + fmt.Sprint(fillUps)
}

func wrapCar() string {
	var colour string
	fmt.Print("Enter a colour to wrap your car: ")
	fmt.Scanln(&colour)
	return colour
}

func drive() int {
	// Pick a random number from 100 to 1000
	distance := rand.Intn(901) + 100
	odometer = odometer + distance
	return distance
}

func fillUp() {
	var cost float64
	fmt.Print("Enter gas fill-up cost: ")
	fmt.Scanln(&cost)

	gasCost = append(gasCost, cost)
	fillUps++
}

func displayCostToFillUp() float64 {
	total := 0.0

	fmt.Println("\nGas Fill-Up Costs:")
	for i := 0; i < fillUps; i++ {
		fmt.Println("Fill-up", i+1, ": $", gasCost[i])
		total += gasCost[i]
	}

	average := total / float64(fillUps)
	fmt.Println("Average fill-up cost: $", average)

	return average
}

func main() {

	// Set the first fill-up
	gasCost = append(gasCost, 74.00)
	fillUps = 1

	fmt.Println("Initial Car Stats:\n" + carStats())

	// Change colour
	carColor = wrapCar()

	// Drive car
	km := drive()
	fmt.Println("You drove", km, "km.")
	fmt.Println("New odometer reading:", odometer)

	// Oil change check
	if oilChange(odometer, oilChangeKM) {
		oilChangeKM = odometer
	} else {
		fmt.Println("Your car does not need an oil change.")
	}

	// Gas fill-up
	fillUp()

	// Show history
	displayCostToFillUp()

	fmt.Println("\nUpdated Car Stats:\n" + carStats())
	fmt.Println("\nDone.")
}
