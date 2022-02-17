// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  }; 


// player name, health, attack power, and money
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }
  };

/* You can also log multiple values at once like this 
console.log (playerInfo.name, playerInfo.attack, playerInfo.health); */

var enemyInfo = [
    {
      name: "Roborto",
      attack: 12
    },
    {
      name: "Amy Android",
      attack: 13
    },
    {
      name: "Robo Trumble",
      attack: 14
    }
  ];

// fight function
var fight = function(enemy) {
    // repeat and execute as long as the enemy-robot is alive 
    while(playerInfo.health > 0 && enemy.health > 0) {

        // asks player if they would like to fight or skip 
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
         // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm if player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
            } 
        }

        // // remove enemy's health by subtracting the amount set in the playerInfo.attackvariables
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            
            
            playerInfo.name  + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;
            
            //leave while() loop since enemy is dead
            break;
        }   else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
        enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        // check player's health
        if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
        } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
        }
    }
};
   
    // Function to start a new game
   var startGame = function() {
  // reset player stats
  playerInfo.reset();
        // reset player stats
        playerInfo.health = 100;
        playerInfo.attack= 10;
        playerInfo.money = 10;
        
    // fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
        // if a player is still alive and wants to keep fighting
        if (playerInfo.health > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];
            
            // reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            
            // pass the pickedEnemyName variable's value into the fight function, where it assumes the value of the enemyName parameter
            fight(pickedEnemyObj);
     
            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            // of ues, take them to the store () function
            if (storeConfirm) {
                shop();
            }    
        } 
    }
        // if player is not alive, break out of the loop and let endGame function run
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }

     // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
     endGame();
};



//function to nd the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // restart the game
        startGame();
    }   else {
        window.alert("Thank you for playering Robot Gladiators! Come back soon!");
    }
};

// go to the shop between battles
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );
  
// use switch case to carry out action
    switch (shopOptionPrompt) {
      case 'REFILL':
      case 'refill':
        playerInfo.refillHealth();
        break;
      case 'UPGRADE':
      case 'upgrade':
        playerInfo.upgradeAttack();
        break;
      case 'LEAVE':
      case 'leave':
        window.alert('Leaving the store.');
  
// do nothing, so function will end
        break;
      default:
        window.alert('You did not pick a valid option. Try again.');
  
// call shop() again to force player to pick a valid option
        shop();
        break;
    }
  };
    // start the game when the page loads
   
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    startGame();

 
