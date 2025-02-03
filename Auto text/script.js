const container=document.querySelector('.container');

const fields=['student','youtuber','Enthusiast','learner'];

let fieldIndex=0;

let characterIndex=0;


autogeneration();


function autogeneration() {
    characterIndex++;
    container.innerHTML=`<h1> I am ${fields[fieldIndex].slice(0,1)==='E'? 'an':'a'} 
         ${fields[fieldIndex].slice(0,characterIndex)}</h1>`;


         if(characterIndex === fields[fieldIndex].length){
            fieldIndex++;
            characterIndex=0;

         }

         if(fieldIndex === fields.length){
            fieldIndex=0;

         }

         setTimeout(autogeneration,400);

}