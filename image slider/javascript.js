const slides=document.querySelectorAll(".slides .Currentslide");
let slideIndex=0;
let intervalId=null;

document.addEventListener("DOMContentLoaded",intializeslide());


function intializeslide(){
    if(slideIndex >= 0){
        slides[slideIndex].classList.add("displayslide");
        intervalId=setInterval(nextslide,7000);
    
    }
   

}


function showslide(index){
    if(slideIndex==slides.length){
        slideIndex=0;
    }
   else if(slideIndex< 0){
        slideIndex=slides.length-1;
    }


    slides.forEach(Currentslide=>{
        Currentslide.classList.remove("displayslide");
    });

    slides[slideIndex].classList.add("displayslide");



}

function nextslide(){
    
    slideIndex++;
    showslide(slideIndex);
   
    


}


function prevslide(){
    clearInterval(intervalId);
    slideIndex--;
    showslide(slideIndex);

}



