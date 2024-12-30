
document.addEventListener("DOMContentLoaded",() =>{
    
let inputEl=document.getElementById("input-el");
let items=document.getElementById("items");
let addBtn=document.getElementById("addbtn");
let delBtn=document.getElementById("delbtn");
let editBtn=document.getElementById("editbtn");
let searchBtn=document.getElementById("searchbtn");
let selectBtn=document.getElementById('selection');
let nextItem=document.getElementById('nextBtn');
let prevItem=document.getElementById('prevBtn');
let time=document.getElementById("time");
let imgGif=document.getElementById("gifs");
let itemsArr=[];
let currentItem=0;
let count=0;


if (localStorage.getItem("items")) {
    itemsArr = JSON.parse(localStorage.getItem("items"));
    renderItems();
}




setInterval(()=>{
    const date=new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
   
    if(hours>=5 && hours<12){
        const formattedTime = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        time.innerHTML = `Morning: ${formattedTime} AM`;
        imgGif.innerHTML=`<img src=/morning.gif alt=good Morning></img>`

    }
    else if(hours>=12 && hours<18){
        const formattedTime = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        time.innerHTML = `Afternoon : ${formattedTime} PM`;
         imgGif.innerHTML=`<img src="/afternoon.gif" alt=good Afternoon></img>`
    }
    else{
        const formattedTime = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        time.innerHTML = `Night: ${formattedTime} PM`;
         imgGif.innerHTML=`<img src="/night.gif" alt="good Night"></img>`
    }

  
   

},1000);

function blinking(){
    let colors=['red','blue','black','green','pink','orange','white','violet','yellow']
   
    time.style.color=colors[count];
    count++;
     if(count>=colors.length){
        count=0;
    }
}

setInterval(blinking,1000);




addBtn.addEventListener('click',function(){
    if(inputEl.value!=""){
        itemsArr.push(inputEl.value);
        renderItems();
        savelocalstorage();
        inputEl.value="";
    }
   
});

function renderItems(){
    items.innerHTML="";
    itemsArr.forEach(item => {
        items.innerHTML += `<li>${item}</li>`;
    });
};

function savelocalstorage(){
    localStorage.setItem("items",JSON.stringify(itemsArr));
}




delBtn.addEventListener('click',function(){
    
   if(currentItem<itemsArr.length-1 || currentItem>=0){
    itemsArr.splice(currentItem,1);
  
    currentItem=Math.min(currentItem,itemsArr.length-1);

   }

   else{
    itemsArr.pop()
   }

   renderItems();
   savelocalstorage();
 
});

editBtn.addEventListener('click',function(){
    if(inputEl.value!=="" && (currentItem<itemsArr.length-1 || currentItem>=0)){
        itemsArr[currentItem]=inputEl.value;
    
    }
    else if(inputEl.value!==''){
        itemsArr[itemsArr.length-1]=inputEl.value;
    }

    renderItems();
    savelocalstorage();
    inputEl.value="";
   
})


searchBtn.addEventListener('click', () => {
    const searchTerm = inputEl.value;
    const listItems = document.querySelectorAll('#items li');
    let found=false;

    listItems.forEach(item => {
        if (item.textContent.includes(searchTerm) && searchTerm !== "") {
            item.style.color = 'red'; 
            found=true;
        } else {
            item.style.color = 'skyblue'; 
            
        }
    });

    if (!found && searchTerm !== "") {
        inputEl.value = "Doesn't exist"; 
        setTimeout(() => {
            inputEl.value = '';
        }, 2000);
    } else {
        inputEl.value = ''; 
    }

   
});


selectBtn.addEventListener('click',()=>{
   highlight();

})






function highlight(){
    
    const listItems = document.querySelectorAll('#items li');
    listItems.forEach(item=>{
        item.style.color='skyblue';
    })

    listItems[currentItem].style.color='green'; 

}

    nextItem.addEventListener('click',()=>{
        currentItem++;
        const listItems = document.querySelectorAll('#items li');
       
        if(currentItem >= listItems.length){
            currentItem=0;
        }

        highlight();
    
    })

    prevItem.addEventListener('click',()=>{
        currentItem--;
        const listItems = document.querySelectorAll('#items li');

        if(currentItem<0){
            currentItem= listItems.length-1;
        }

        highlight();

       
    })







});