let player={
  name:"Ritik",
  chips: 125
}
let messageEl=document.getElementById("message-el");
let message="";
let isAlive=false;
let hasBlackJack=false;
const cards= []
let sum=0;
let cardEl=document.getElementById("card-el");
let sumEl=document.getElementById("sum-el");
let playerEl=document.getElementById("player-el");
function getrandomnumber(){
  let mathNumber=Math.floor(Math.random()*13)+1;
  if( mathNumber===1){
    return 11;
  }
  else if( mathNumber>10){
    return 10;
  }
  else{
  return mathNumber;}
}
playerEl.textContent=player.name + " : $" + player.chips;

function startgame(){
  isAlive=true;
  let firstCard=getrandomnumber();
  let secondCard=getrandomnumber();
  const cards= [firstCard , secondCard]
  let sum=firstCard + secondCard;
  rendergame();
}


function  rendergame(){
    sumEl.textContent= "Sum : " + sum;
    cardEl.textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
    cardEl.textContent+= cards[i] + "  " ;
    }
   if(sum<21){
    message="Do you want to draw a new card? 😊"
   }
   else if(sum===21){
    message="woohoo,You've got a Blackjack 🤩"
    hasBlackJack=true;
   }
   else{
    message="You're Out of the game 🥺"
    isAlive=false;

   }
   messageEl.textContent=message;
}
function newcard(){
    if(isAlive===true && hasBlackJack===false){
    let card=getrandomnumber();
    cards.push(card)
    sum+=card;
    rendergame();
    }
}