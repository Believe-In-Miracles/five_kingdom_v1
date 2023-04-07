Rules

1. One attacking move per day per Kingdom (potential for this to change in the future)

2. When a kingdom holds no territories - they can attack any territory

3. When a kingdom holds territories - can only attack adjoining territories (i.e. territories next to the the territories held by the kingdom)

4. Cannot attack a kingdom that you are in an alliance with. You must first end the alliance before being able to attack that kingdom


Rules

1. Date should be auto populated with the current date

2. Cannot select a time that is within 2 hours of the current time. For example, if the time is 5:36pm then you can only pick a time that is 8pm or later. Unavailable times should be greyed out.

3. Cannot select a time that has already been selected by another kingdom. So if 2pm is taken by another kingdom, then it should be greyed out for other kingdoms.

4. If a kingdom does not make their move for the day, their turn will be lost (Note this is different to what we agreed but I think works better and adds some drama)


Logic / Rules

1. Once the battle time has been confirmed, the time remaining to battle will appear in the 'upcoming battles' section.

2. Once the time remaining is below 10 minutes, the text should turn red and a button should appear to allow users to access that battle page


Logic / Rules

1. Defense boost button - any player (regardless of kingdom) can support any kingdom during a battle. Each support is worth 100pts which counts towards that Kingdoms defence score. A maximum of 10,000 pts can be added.

2. Health bar - the health bar will be reduced for each successful strike. A successful strike will see the opposing Kingdom's health bar reduce by 10% (i.e. 10 successful strikes for victory). The attacking kingdom will always go first. For calculations, see next section.



	Step 3: Battle calculations								
									
		A) Calculate a Kingdom's attack and defense scores							
									
		Note: Each warrior (or NFT) will has an attack and defense score, which varies based on their rank							
									
		Kingdom's attack score = sum of the Kingdom's attack scores for each staked warrior + attack asset scores (this should be a live calculation)							
									
		Kingdom's defense score = sum of the Kingdom's defense scores for each staked warrior + defense bonus boost points + defense asset scores (this should be a live calculation)							
									
									
		B) Calculate each Kingdom's chance of successfully blocking an attack							
									
		Kingdom's chance of blocking an attack (%) = Kingdom's defense score / 100,000							
									
									
		C) Calculate each Kingdom's chance of successfully doing damage to the opponent							
									
		Kingdom's chance of a successful attack (%) = Kingdom's attack score / (Kingdom's attack score + Opponent's attack score)							
									
									
		C) Battle calculations							
									
		1. Kingdom who initiated the attack will go first.							
									
		2. Check to see if your attack will be blocked. Do this by randomly generating a number between 0% and 100%. If the randomly generated number is less than the successful block % score for the opposing Kingdom, attack is blocked. If randomly generated number is more than the successful block % score for the opposing Kingdom, attack is not blocked and the attacking Kingdom's turn continues.							
									
		3. If attack is blocked, turn is lost and 0% damage is done to opposing Kingdom.							
									
		4. If attack is not blocked, calculate if successful strike is made (attack that causes damage). Do this by randomly generating a number between 0% and 100%. If the randomly generated number is less than the successful attack score % for your Kingdom, strike is successful. If randomly generated number is more than the successful attack score % for your Kingdom, attack is unsuccessful.							
									
		5. If attack is unsuccessful, turn is over and 0% damage is done. If attack is successful, 10% damage is done to opposing Kingdom and turn is over.							
									
		6. Kingdom who did not initiate attack has their turn…							
									
		7. And so on…each Kingdom takes turns until health bar for any Kingdom reaches 0%.							
