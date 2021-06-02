// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack= 12;

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyName) {
    //repeat and execute as long as enemy-robot is alive
    while(enemyHealth > 0) {

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
}
    // run fight function to start game

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames [i];
    enemyHealth = 50;
    //call fight function with enemy-robot
    fight(pickedEnemyName);
}