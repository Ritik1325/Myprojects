const emojis=document.querySelectorAll('.emojis .bx');
const rating=document.querySelectorAll('.bxs-star');
const colors=['red','orangered','lightblue','lightgreen','green'];


updateRatings(0);


rating.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        updateRatings(index);
        
    })

})



function updateRatings(index){
    rating.forEach((star,idx)=>{
        if(idx < index+1){
            star.classList.add('active')
        }
        else{
            star.classList.remove('active')
        }

    })

    emojis.forEach(emoji=>{
        emoji.style.transform=`translateX(-${index*48}px)`;
        emoji.style.color=colors[index];
    })


}