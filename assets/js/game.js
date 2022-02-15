// player name, health, attack power, and money
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

/* You can also log multiple values at once like this 
console.log (playerName, playerAttack, playerHealth); */

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 60;

// fight function
var fight = function (enemyName) {
    
    // Alerts the players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // asks player if they would like to fight or skip 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variables
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + "now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyName + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm if player wants to skip
       var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
   if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    } 
    // if no (false), ask questions again by running fight() again
    else {
    fight ();
    }
} else {
    window.alert("You need to pick a valid option. Try again!");
  }
};

for(var i = 0; i < enemyName.length; i++) {
    fight(enemyName[i]);
}





















/* console.log(enemyName.length);
for(var i = 0; i < enemyName.length; i++) {
    console.log(enemyName[i]);
    console.log(i);
    console.log(enemyName[i] + " is at " + i + " index");
  }
*/

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
// enemyHealth = enemyHealth - playerAttack;

//   // Log a resulting message to the console so we know that it worked.
// console.log (
//     playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
// );

// // check enemy's health
// if (enemyHealth <= 0) {
//     window.alert(enemyName + " has died!");
// }
// else {
//     window.alert(enemyName + " still has " + enemyHealth + " health left.");
// }

//   // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
//   playerHealth = playerHealth - enemyAttack;

//   // Log a resulting message to the console so we know that it worked.
// console .log (  
//   enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining." 
// );

// //check player's health
// if (playerHealth <=0) {
//     window.alert(playerName + " had died!");
// }
// else {
//     window.alert(playerName + " still has " + playerHealth + " health left.");
// }