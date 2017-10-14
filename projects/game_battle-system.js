// images will not render - getImage needs to be replaced!

/**
Click on one of the buttons when it is your turn. 

The boss is actually very difficult to beat. It is easy to get him down to 50, but after that it is a fair fight. 
*/

var battle = true;
var turn = true;
var gameWon;
var game = true;
var game1 = true;

var playerName="STEVE";
var playerSize = 75;
var playerHealth=25;
var playerMaxHealth=25;
var playerStrength=4;
var playerDefense=2;
var playerImage=getImage("creatures/Winston");//player
var playerHealing = 4;
var playerHealthPotion = 3;
var playerAttackPotion = 1;
var playerDefensePotion = 2;

var playerAttack = false;
var playerDefend = false;
var playerHeal = false;
var playerPain = false;

var lightning = false; //specific attacks
var raining = false;
var blowing = false;

var flash = 255;
var rainX = [200];
var rainY = [0];

var enemyName="Blobbo";
var enemySize = 125;
var enemyWait = 125;
var enemyHealth=40;//How many hitpoints the player has. This is unmodified by armor or weapons.
var enemyMaxHealth=40;//So that the player doesn't go over max with playerHealing items/spells.
var enemyStrength=4;//Again, can be changed. Modified by a weapon.
var enemyDefense=2;//How many points are negated from a hit taken. Modified by defense.
var enemyImage=getImage("avatars/piceratops-seed");//player
var enemyHealing = 4;
var enemyhealthPotion = 1;
var enemyberserkPotion = 2;
var enemythornPotion = 1;

var enemyAttack = false;
var enemyDefend = false;
var enemyHeal = false;
var effect = false;

var enemyPain = false;

var chance = 0; //chance for enemy to choose something
var decide = true;
var fade = 0;
var playing = false;

var blowX = 0;
var heartY = 80;

for (var i = 0; i < 100; i ++) {
    
    rainX.push(random(400));
    rainY.push(random(-400, 0));
    
}

var blow = function() {
    
    fill(255, 0, 0, 100);
    
    for (var i = 0; i < 10; i ++) {
        
        if ((blowX - i*30 + random(50)) > 90) {
            ellipse(50 + blowX - i*30 + random(50), 290 + random(50), 50, 50);
        }
        
    }
    
    if (blowX > 100) {
        
        enemyPain = true;
        
    }
    
    blowX += 2;
    if (blowX > 600) {
        
        turn = false;
        playerAttack = false;
        playing = false;
        blowing = false;
        enemyPain = false;
        
    }
    
};

var flashing = function() {
    
    enemyPain = true;
    stroke(255, 255, 255, flash);
    strokeWeight(10);
    line(300, 0, 350, 100);
    line(250, 150, 350, 100);
    line(250, 150, 320, 300);
    
    fill(0, 0, 0, flash);
    rect(0, 0, width, height);
    flash-=5;
    if (flash < 0) {
        
        lightning = false;
        turn = false;
        playing = false;
        playerAttack = false;
        enemyPain = false;
        
    }
    
};

var rain = function() {
    
    for (var i = 0; i < rainX.length; i ++) {
        
        fill(0, 255, 0);
        ellipse(rainX[i], rainY[i], 10, 10);
        rainX[i] += 2;
        rainY[i] += 4;
        
    }
    
    if (rainY[0] > 200) {
        
        enemyPain = true;
        
    }
    
    if (rainY[0] > 800) {
        
        raining = false;
        turn = false;
        playing = false;
        playerAttack = false;
        enemyPain = false;
        
        rainX[0] = 200;
        rainY[0] = 0;
        
        for (var i = 1; i < rainX.length; i ++) {
        
            rainX[i] = random(400);
            rainY[i] = random(-400, 0);
        
        }
        
    }
    
};

var healing = function() {
    
    for (var i = 0; i < 5; i ++) {
        
        if (turn) {
            
            image(getImage("cute/Heart"), random(10, 150), random(200, 290) + heartY, 30, 45);
            
        } else {
            
            image(getImage("cute/Heart"), random(210, 350), random(200, 290) + heartY, 30, 45);
            
        }
        
    }
    
    heartY--;
    
    if (heartY < 1) {
        
        turn = false;
        playerHeal = false;
        playing = false;
        
    }
    
};

mouseReleased = function() {
    
    if (playing === false) {
        
        if (turn && mouseY > 50 && mouseY < 130) {
            
            if (mouseX > 20 && mouseX < 130) {
                
                playerAttack = true;
                effect = true;
                
            } else if (mouseX > 145 && mouseX < 255) {
                
                playerDefend = true;
                effect = true;
                
            } else if (mouseX > 270 && mouseX < 380) {
                
                playerHeal = true;
                effect = true;
                
            }
            
        }
        
    } else if (playerAttack && mouseY > 50 && mouseY < 130) {
            
        if (mouseX > 20 && mouseX < 130) {
            
            blowing = true;
            
        } else if (mouseX > 145 && mouseX < 255) {
            
            lightning = true;
            
        } else if (mouseX > 270 && mouseX < 380) {
            
            raining = true;
            
        }
        
    }
};

var drawMiniGame = function() {
    
    if (battle) {
        
        background(114, 137, 196);
        noStroke();
        fill(31, 105, 24);
        rect(0, 300, width, 100);
         
        image(playerImage, 85 - playerSize/2, 290 - playerSize/2, playerSize, playerSize);
        image(enemyImage, 316 - enemySize/2, 285 - enemySize/2, enemySize, enemySize);
        /*
        fill(121, 127, 138);
        rect(20, 360, 100, 30, 5);
        rect(150, 360, 100, 30, 5);
        rect(280, 360, 100, 30, 5);
        
        fill(0, 0, 0);
        text("Potions ", 170, 350);
        fill(255, 255, 255);
        text("Health : " + playerHealthPotion, 34, 383);
        text("Attack : " + playerAttackPotion, 164, 383);
        text("Defense : " + playerDefensePotion, 285, 383);
        */
        if (playerDefend) {
            
            fill(103, 140, 143, 100);
            arc(85, 290 + playerSize/1.85, playerSize*1.9, playerSize*2.25, 180, 360);
            
        }
        if (enemyDefend) {
            
            fill(103, 140, 143, 100);
            arc(305, 290 + enemySize/1.85, enemySize*1.6, enemySize*2.25, 180, 360);
            
        }
        
        if (turn) {
            
            if (playerSize < 150) {
                
                playerSize++;
                
            }
            if (enemyWait > 125) {
                
                enemyWait --;
                
            }
            
            fill(255, 0, 0, 100);
            rect(20, 50, 110, 80, 5);
            fill(51, 0, 255, 100);
            rect(145, 50, 110, 80, 5);
            fill(0, 255, 30, 100);
            rect(270, 50, 110, 80, 5);
            
            fill(0, 0, 0, 200);
            textFont(createFont("impact"), 30);
            text("Attack        Defend           Heal", 35, 100);
            
            if (playerAttack) {
                
                if (effect) {
                    
                    if (enemyDefend) {
                        
                        if (blowing) {
                            
                            enemyHealth -= round((playerStrength + random(0, 3))/1.5);
                            enemyDefend = false;
                            effect = false;
                            
                        } else if (lightning) {
                            
                            enemyHealth -= round((playerStrength + random(-2*enemyDefense, 0))/1.5);
                            enemyDefend = false;
                            effect = false;
                            
                        } else if (raining) {
                            
                            enemyHealth -= round((playerStrength + random(-1*enemyDefense, 2))/1.5);
                            enemyDefend = false;
                            effect = false;
                            
                        }
                        
                        blowX = 0;
                        flash = 255;
                        
                    } else {
                        
                        if (blowing) {
                            
                            enemyHealth -= round(playerStrength + random(0, 3));
                            effect = false;
                            
                        } else if (lightning) {
                            
                            enemyHealth -= round(playerStrength + random(-2*enemyDefense, 0));
                            effect = false;
                            
                        } else if (raining) {
                            
                            enemyHealth -= round(playerStrength + random(-1*enemyDefense, enemyDefense));
                            effect = false;
                            
                        }
                        blowX = 0;
                        flash = 255;
                        
                    }
                    
                }
                
                textSize(50);
                fill(0, 0, 0);
                text("ATTACK!!!", 100, 200);
                playing = true;
                
                fill(0, 0, 0);
                rect(20, 50, 110, 80, 5);
                rect(145, 50, 110, 80, 5);
                rect(270, 50, 110, 80, 5);
                
                fill(255, 255, 255, 200);
                textFont(createFont("impact"), 25);
                text("Blow            Lightning       Acid Rain", 48, 100);
                
                if (blowing) {
                    
                    blow();
                
                } else if (raining) {
                    
                    rain();
                    
                } else if (lightning) {
                    
                    flashing();
                    
                }
                
            } else if (playerHeal) {
                
                if (effect) {
                    
                    playerHealth += round(playerHealing + random(-2, 2));
                    heartY = 80;
                    
                }
                
                textSize(50);
                text("HEAL!!!", 100, 200);
                
                effect = false;
                playing = true;
                healing();
                
            } else if (playerDefend) {
                
                turn = false;
                
            }
            if (playerHealth > playerMaxHealth) {
                
                playerHealth = playerMaxHealth;
                
            }
            decide = true;
            
        } else {
            
            if (enemyWait < 250) {
                
                enemyWait++;
                
            }
            if (playerSize > 75) {
                
                playerSize --;
                
            }
            
            if (enemyWait === 250) {
                
                chance = random(3);
                
                if (enemyHealth < enemyMaxHealth/3) {
                    
                    if (chance < 1.5) {
                        
                        enemyHeal = true;
                        
                    } else if (chance < 2.5 && enemyDefend === false) {
                        
                        enemyDefend = true;
                        
                    } else {
                        
                        enemyAttack = true;
                        
                    }
                    
                } else {
                    
                    if (chance < 1 && enemyDefend === false) {
                        
                        enemyDefend = true;
                        
                    } else {
                        
                        enemyAttack = true;
                        
                    }
                    
                }
                
                if (enemyAttack) {
                    
                    if (playerDefend) {
                        
                        playerHealth -= round((enemyStrength + random(-1*playerDefense, 1))/1.5);
                        playerDefend = false;
                        
                    } else {
                        
                        playerHealth -= (enemyStrength + round(random(-1*playerDefense, 1)));
                        
                    }
                    textSize(50);
                    text("ATTACK!!!", 100, 200);
                    enemyAttack = false;
                    turn = true;
                    
                } else if (enemyHeal) {
                    
                    if (effect) {
                        
                        enemyHealth += round(enemyHealing + random(-1, 2));
                        heartY = 80;
                        
                    }
                    
                    effect = false;
                    turn = true;
                    
                } else if (enemyDefend) {
                    
                    turn = true;
                    
                }
                
            enemyWait = enemySize;
            
            }
        }
        if (enemyWait < 175) {
            
            enemySize = enemyWait;
            
        } else {
            
            enemySize = 175;
            
        }
        
        fill(255, 0, 0);
        rect(10, 5, 150, 35);
        rect(245, 5, 150, 35);
        
        fill(0, 255, 0);
        if (playerHealth > 0) {
            
            rect(10, 5, playerHealth/playerMaxHealth*150, 35);
            
        }
        if (enemyHealth > 0) {
            
            rect(245, 5, enemyHealth/enemyMaxHealth*150, 35);
            
        }
        fill(0, 0, 0);
        textSize(18);
        text(playerName + " : " + playerHealth + " / " + playerMaxHealth, 15, 30);
        text(enemyName + " : " + enemyHealth + " / " + enemyMaxHealth, 255, 30);
        
        if (enemyPain) {
            
            enemySize += random(-10, 10);
            
        }
        
        if (enemyHealth <= 0 && !playing) {
            
            gameWon = true;
            battle = false;
            fade = 255;
            game = false;
            
        }
        if (playerHealth <= 0 && !playing) {
            
            gameWon = false;
            battle = false;
            fade = 0;
            
        }
        
        
    } else if (gameWon === false) {
    
        fill(255, 0, 0, fade);
        fade++;
        rect(0, 0, width, height);
    
    }
    
};

draw = function() {
    
    if (!game) {
        
        if (game1) {
            
            enemyName="BOSS";
            enemySize = 125;
            enemyWait = 125;
            enemyHealth=100;//How many hitpoints the player has. This is unmodified by armor or weapons.
            enemyMaxHealth=100;//So that the player doesn't go over max with playerHealing items/spells.
            enemyStrength=5;//Again, can be changed. Modified by a weapon.
            enemyDefense=2;//How many points are negated from a hit taken. Modified by defense.
            enemyImage=getImage("avatars/purple-pi");//player
            enemyHealing = 4;
            enemyhealthPotion = 1;
            enemyberserkPotion = 2;
            enemythornPotion = 1;
            game1 = false;
            battle = true;
            turn = true;
            
        }
        
        drawMiniGame();
        
    } else if (battle) {
        
        drawMiniGame();
        
    }
    
};