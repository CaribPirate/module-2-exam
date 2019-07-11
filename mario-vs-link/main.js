//mario vs link
'use strict';

//event listeners
document.getElementById('mario-btn').addEventListener('click', marioPage);
document.getElementById('link-btn').addEventListener('click', linkPage);
document.getElementById('calculate').addEventListener('click', calculateAttack);
document.getElementById('battle-btn').addEventListener('click', startBattle);

//variables
var marioAttack, linkAttack, message;
var i = 0;
var speed = 50;

//functions
//mario
function marioPage() {
  document.getElementById('img').src = 'images/mario.png';
  document.getElementById('html').style.backgroundColor = 'red';
  document.body.style.backgroundColor = 'pink';
  document.getElementById('hero').innerHTML = 'The Mushroom Kingdom';
  document.getElementById('love').innerHTML = 'Princess Peach';
  document.getElementById('nemesis').innerHTML = 'King Bowser';
}
//link
function linkPage() {
  document.getElementById('img').src = 'images/link.png';
  document.getElementById('html').style.backgroundColor = 'green'
  document.body.style.backgroundColor = 'lightgreen';
  document.getElementById('hero').innerHTML = 'Hyrule';
  document.getElementById('love').innerHTML = 'Princess Zelda';
  document.getElementById('nemesis').innerHTML = 'Ganon';
}
//attack values
function calculateAttack() {
  //inputs
  let marioStrength = Number(document.getElementById('marioStrength').value);
  let linkStrength = Number(document.getElementById('linkStrength').value);
  let marioDefense = Number(document.getElementById('marioDefense').value);
  let linkDefense = Number(document.getElementById('linkDefense').value);

  //process
  marioAttack = 2 * marioStrength / linkDefense + 5;
  linkAttack = (linkStrength + 15) / marioDefense;

  //outputs
  document.getElementById('marioAttack').innerHTML = Math.round(marioAttack);
  document.getElementById('linkAttack').innerHTML = Math.round(linkAttack);
}

//battle
function startBattle() {
  //inputs
  let word1 = document.getElementById('word1').value;
  let word2 = document.getElementById('word2').value;
  let word3 = document.getElementById('word3').value;

  if (Math.round(marioAttack) > Math.round(linkAttack)) {
    //mario is stronger
    message = "The two heroes stared at eachother as if the main theme from \'the Good, the Bad, and the Ugly\' was playing. Then, Mario pulled a " + word1 + " out of his pants. Link was infuriated after what he just saw and aimed his arrows at him. They started " + word2 + " eachother, but Mario dodged every arrow. After Link ran out of arrows, Mario summoned the gods before Link with his " + word1 + ". \"" + word3 + "!\", exclaimed Link, as he took his last breath.";

  } else if (Math.round(marioAttack) < Math.round(linkAttack)) {
    //link is stronger
    message = "The two heroes stared at eachother as if the main theme from \'the Good, the Bad, and the Ugly\' was playing. Then, Link pulled a " + word1 + " out of his pants. Mario was infuriated after what he just saw and ate the invincibility star from his pocket. They started " + word2 + " eachother, but Link used the " + word1 + " to shutdown all of Mario's attacks. After Mario was beaten, Link summoned the gods before Link with his " + word1 + ". \"" + word3 + "!\", exclaimed Mario, as he took his last breath.";

  } else if (Math.round(marioAttack) == Math.round(linkAttack)) {
    //they're the same power
    message = "The two heroes stared at eachother as if the main theme from \'the Good, the Bad, and the Ugly/' was playing. Then, Mario pulled a " + word1 + " out of his pants. To his surprise, Link also pulled out another " + word1 + ", instead out of his shoe. The two " + word1 + "s flew out of Mario's and Link's hands and collided between the two heroes. The impact caused everything to start " + word2 + " around them. The two hapless heroes simultaneously yelled \"" + word3 + "!\" as the spontaneous storm that appeared before them destroyed eveything they knew, even eachother."
  } else {
    message = "Please calculate the attack values."
  }

  document.getElementById('battle-text').innerHTML = '';
  i = 0;
  //output
  typeWriter();

}

//typewriter effect
function typeWriter() {
  if (i < message.length) {
    document.getElementById('battle-text').innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}