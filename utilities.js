document.getElementById('btn-apply').addEventListener('click',function(){
    const previousPrice=document.getElementById('price');
    const payAble=previousPrice.innerText;
    const payAbleTotal=(payAble*30)/100;
    const haveToPay=payAble-payAbleTotal;
   document.getElementById('pay-total').innerHTML=haveToPay;
})


