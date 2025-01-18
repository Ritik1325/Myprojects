document.addEventListener('DOMContentLoaded',()=>{
    const prevBtn=document.getElementById('prev');
    const nextBtn=document.getElementById('next');
    const progressBar=document.getElementById('progress-bar');
    const checkPoints=document.querySelectorAll('#checkpoints');
    let progArea=0;
    let currentPoint=1;

    checkPoints[0].classList.add('checked');
    nextBtn.addEventListener('click',()=>{
        if(progArea<100){
            currentPoint++;
            updateProgress();
            
            progArea+=25;
            progressBar.style.width=`${progArea}%`;
           

        }
        

       
    });

    prevBtn.addEventListener('click',()=>{
        if(progArea>0){
            currentPoint--;
            updateProgress();
            progArea-=25;
            progressBar.style.width=`${progArea}%`;
            
        }
    })

   function updateProgress(){
    checkPoints.forEach((check,index)=>{
        if(index<currentPoint){
            check.innerHTML='&#10004';
            check.classList.add('checked');
        }
       
        else{
            check.innerHTML='&#10006'
            check.classList.remove('checked');
        }
    })
    
   }


})