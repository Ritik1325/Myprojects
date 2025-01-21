const searchbar=document.querySelector('.bx-search');
const container=document.querySelector('.container');
let count=0;



searchbar.addEventListener('click',()=>{
    if(count==0){
        container.classList.add('active');
        count++;
        container.classList.remove('original')
    }
    else{
        container.classList.remove('active');
        container.classList.add('original');
        count=0;
    }
})