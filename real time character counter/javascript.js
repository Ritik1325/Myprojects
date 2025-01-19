const remainCount=document.getElementById('remaining-count');
const totalCount=document.getElementById('total-count');
const textArea=document.getElementById('characters');

textArea.addEventListener('keyup',()=>{
    updateCount()
})



updateCount();




function updateCount(){
    totalCount.innerHTML=textArea.value.length;
    remainCount.innerHTML=textArea.getAttribute("maxlength")-textArea.value.length;
    
}