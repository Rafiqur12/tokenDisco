document.getElementById('btn-apply').addEventListener('click',function(){
    const previousPrice=document.getElementById('price');
    const payAble=previousPrice.innerText;
    const getToken=document.getElementById('token');
    const trueToken=getToken.value;

    if(trueToken==='DISCO'){
        const payAbleTotal=(payAble*30)/100;
        const haveToPay=payAble-payAbleTotal;
   document.getElementById('pay-total').innerHTML=haveToPay;
    }
    else{
        console.log(payAble);
        document.getElementById('pay-total').innerHTML=payAble;
    }
    
    
})


