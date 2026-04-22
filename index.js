// Write your solution in this file!
//The Flatburger restaurant is creating a website that needs functionality to create a menu of food and drinks to sell to its customers. You are tasked with developing a menu with milkshakes and burgers. In addition to the menus you will also be creating menu features for both a milkshake and burger.
// Task 2, Step 1: Variable Data
// Declaring  'burgers' in GLOBAL scope so it's accessible everywhere in the code
// Initializing it with 2 elements as instructed
var burgers = ['Hamburger', 'Cheeseburger'];

// Declaring 'featuredDrink' in GLOBAL scope and assign it 'Strawberry Milkshake'
var featuredDrink = 'Strawberry Milkshake';


// Task 2, Step 2: Function and Block
// Creating a function named 'addBurger'
// Inside, a FUNCTION-SCOPED variable 'newBurger' is created using var
function addBurger() {

  var newBurger = 'Flatburger';

  // Using .push() to add newBurger into the global burgers array
  burgers.push(newBurger);
}


// Task 2, Step 3: Variable Declaration and Scope
// Writing an if(true) block — the condition is always true so it always runs
if (true) {

  // 'anotherNewBurger' is BLOCK-SCOPED (const) — only lives inside this { } block
  // Block-scoped means it cannot be accessed outside these curly braces
  const anotherNewBurger = 'Maple Bacon Burger';

  // Use .push() to add anotherNewBurger into the global burgers array
  burgers.push(anotherNewBurger);
}

// Creating "changeFeaturedDrink"function that updates the global featuredDrink variable
// This demonstrates how a function can modify a variable in the outer (global) scope
function changeFeaturedDrink() {

  // Reassigning the global featuredDrink variable to a new value
  featuredDrink = 'The JavaShake';
}


// Export everything so Jest tests can import and verify the values and functions
module.exports = { burgers, featuredDrink, addBurger, changeFeaturedDrink };
























