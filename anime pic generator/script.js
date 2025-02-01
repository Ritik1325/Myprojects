
const animeImg=document.querySelector('.anime-data');
const generateBtn=document.getElementById('generate');
const message=document.getElementById('message');
const input=document.getElementById('anime-name');
const imageSection=document.querySelector('.image-section');

let image=null;
let imageClone=null;



async function getdata(){


    try{
        const inputValue=input.value;
        const url=`https://api.jikan.moe/v4/anime?q=${inputValue}/pictures`;
        message.innerText="loading...";
        const response= await fetch(url);
        const results=await response.json();
        const result=results.data[0];
        console.log(results);

        if(image){
            image.remove();
            imageClone.remove();
            
        }


        image=document.createElement('img');
        image.src= result.images.jpg.small_image_url;
        image.alt= result.title;
        message.textContent= result.title;
        animeImg.insertBefore(image,message);
        imageClone=image.cloneNode();
        imageSection.appendChild(imageClone);


        image.addEventListener('click',()=>{
           imageSection.classList.toggle('active');
        })


    }
   catch(defect){
    message.innerHTML=`An Error Occured: ${defect}`;
    console.log('error',defect)


   }

}

generateBtn.addEventListener('click',()=>{
    if(input.value!=""){
        getdata();
    }
   
    
})

