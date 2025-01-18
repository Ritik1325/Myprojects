document.addEventListener('DOMContentLoaded',()=>{
    const billAmount=document.getElementById('bill-amount')
    const tipPercent=document.getElementById('tip-percentage');
    const total=document.getElementById('total');
    const calcBtn=document.getElementById('calculate');

    function tipCalculation(){
        if(billAmount.value!="" && tipPercent.value!=""){
            let bill=billAmount.value;
            let tip=tipPercent.value;

            let tipCalc=bill*(1+tip/100);
            total.innerHTML=`Total: $ ${tipCalc.toFixed(2)}`;
           
        }
        else{
            total.innerHTML=`Total: ${tipCalc.toFixed(2)}`;
        }
    }

    calcBtn.addEventListener('click',tipCalculation);
})