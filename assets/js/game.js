var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack= 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!"); 
    // FIGHT OR SKIP PROMPT
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose');
    // FIGHT
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // player attack 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) { 
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health Left.")
        }    
    
        // enemy's attack
        playerHealth = playerHealth - enemyAttack;
        console.log( 
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        
        if (playerHealth <= 0) {
            window.alert (playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    // SKIP
    else if (promptFight === "skip" || promptFIght === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
};
 // run fight function to start game
fight();