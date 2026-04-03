// Write your solution in this file!
//The Flatburger restaurant is creating a website that needs functionality to create a menu of food and drinks to sell to its customers. You are tasked with developing a menu with milkshakes and burgers. In addition to the menus you will also be creating menu features for both a milkshake and burger.
//variables
let menu = {
  milkshakes: [],
  burgers: []
};

//writing a function named addburger and function scoped newburger and assigned it value "flabburger"
function addburger() {
  let newburger = "flabburger";
  menu.burgers.push(newburger); //using the push method to add the newburger to the burgers array in the menu object

}

//writing an if statement whose condition is true, so that the code in its block will always execute.The code inside of the if statement’s block should do the following in this exact order:

if (true) {
  // code block
}



//Create a block-scoped variable named anotherNewBurger and assign it the value 'Maple Bacon Burger
//Use the .push() array method to add anotherNewBurger to the burgers array.
    let anotherNewBurger = "Maple Bacon Burger";
    menu.burgers.push(anotherNewBurger);

//Write a function named changeFeaturedDrink that when called, changes the value of the FeaturedDrink variable to 'The JavaShake'.
let FeaturedDrink = "The Chocolate Shake";

function changeFeaturedDrink() {
  FeaturedDrink = "The JavaShake";
}  

console.log(menu);




























