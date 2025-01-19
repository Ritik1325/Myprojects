let startEl=document.getElementById("start-el");
let headingEl=document.getElementById("heading-el");
let renderEl=document.getElementById("render-el");
let scoreEl=document.getElementById("score-el");
let count=0;
let nowStart=false;
headingEl.textContent="click to start";

function getit(){
    nowStart=true;
    headingEl.textContent="Snake & Ladder";
    count=0;
    scoreEl.textContent="0";
}
function diceNumber(){
    
   if(nowStart===true){
    headingEl.textContent="Snake & Ladder";
    let dice= Math.floor(Math.random()*7);
    count=Math.min( count+=dice,100);
    scoreEl.textContent=count;
    check();
}
   
}

function check(){
    if(count===99||count===67||count===33||count===21||count===65){
        count-=13;
        headingEl.textContent="OOps!!🐍";
    }
    else if(count===23||count===55||count===38||count===76||count===85){
        count+=11;
        headingEl.textContent="Got the ladder!🤩"
    }
    else if(count===100){
        headingEl.textContent="You Won🏆"
    }
}






