document.addEventListener('DOMContentLoaded',()=>{
    const menu=document.getElementById('hamburger');
    const cancel=document.getElementById('cancel');
    const sideBar=document.getElementById('sidebar');


    menu.addEventListener('click',()=>{
        sideBar.classList.toggle('visible');
    })

    cancel.addEventListener('click',()=>{
        sideBar.classList.remove('visible');
    })
})