document.addEventListener('DOMContentLoaded',()=>{

    const birthDate=document.getElementById('birthday');
    const message=document.getElementById('message');
    const calcBtn=document.getElementById('calculate');
    

    function calculateAge(){
        let birthValue=birthDate.value;
        if(birthValue===""){
            message.innerHTML='please enter valid input';
        }
        else{
             let myAge=getAge(birthValue);
        message.innerText=`your age is ${myAge} ${myAge > 1 ? 'Years' : 'year'} old`

        }
       

    }

    function getAge(birthValue){
        const currentDate=new Date();
        const myDate=new Date(birthValue);
        let myAge= currentDate.getFullYear() - myDate.getFullYear();
        let month= currentDate.getMonth() - myDate.getMonth();

        if (
            month < 0 ||
            (month === 0 && currentDate.getDate() < birthDate.getDate())
          ) {
            myAge--;
          }
        
          return myAge;
    }

       calcBtn.addEventListener('click',calculateAge);

})