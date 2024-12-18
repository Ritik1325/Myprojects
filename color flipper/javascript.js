let theBckColor=document.getElementById("back-clr");
let theButton=document.getElementById("pressed");

let clrArr=["red","green","yellow","grey","pink","violet","black"];
theButton.addEventListener('click',function(){
    let theLength=clrArr.length;
    let values= Math.floor(Math.random()*theLength);
    if(clrArr[values]=="black"){
    document.body.style.backgroundColor= clrArr[values];
    theBckColor.innerHTML= `Background color : <span>${clrArr[values]}</span>`
    theButton.style.color= 'white';}
    else{
    document.body.style.backgroundColor= clrArr[values];
    theBckColor.innerHTML= `Background color : <span>${clrArr[values]}</span>`;
    theButton.style.color= 'black';
    theButton.style.fontWeight=600;
    }
   
    

})