const accessKey='kuVMcidRNt3Z2sGOh-OwcEGscMX21ITXNgZDfwQG17E';

const form=document.querySelector('form');
const inputEl=document.getElementById('input');
const showmoreEL=document.getElementById('show-more')
const searchedResultEl=document.querySelector('.searched-result')
let page=1;
let InputData="";



async function getdata() {
    InputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${InputData}&client_id=${accessKey}`;
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);

    if(page===1){
        searchedResultEl.innerHTML='';
    }

    const result=data.results;

    result.map(item=>{
        const itemsWrapper=document.createElement('div');
        itemsWrapper.classList.add('wrapping-up');
        const imagesEl=document.createElement('img');
        imagesEl.src=item.urls.small;
        imagesEl.alt=item.alt_description;
        const imageLink=document.createElement('a');
        imageLink.href=item.links.html;
        imageLink.target='_blank';
        imageLink.innerText=item.alt_description;

        itemsWrapper.appendChild(imagesEl);
        itemsWrapper.appendChild(imageLink);
        searchedResultEl.appendChild(itemsWrapper);


    })

    page++;

    if(page>1){
        showmoreEL.style.display='flex';
    }    
    
}

form.addEventListener('submit',occur=>{
       
    occur.preventDefault();
    page=1;
    getdata();
});

showmoreEL.addEventListener('click',()=>{
    getdata();
})











