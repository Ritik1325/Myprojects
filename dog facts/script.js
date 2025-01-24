const url=`https://dog-api.kinduff.com/api/facts`
const facts=document.getElementById('description');
const btn=document.getElementById('btn');

facts.innerText=`click to know facts..`

async function getData() {
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
  facts.innerText=data.facts;
    
}

btn.addEventListener('click',getData);
