// get input value
function getInputValue (inputID){
    const input = document.getElementById(inputID);
    const amount= input.value;
    input.value = '';
    return amount;
}
// update deposit and withdraw field
function updateTotalField (totalFieldId ,updateAmount){
    
    const updateTotal = document.getElementById(totalFieldId);
    const updateText = updateTotal.innerText;

     
    updateTotal.innerText = parseFloat(updateAmount)+parseFloat(updateText);

}
function getCurrentBalance () {
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    return parseFloat(balanceText);
}
// update balance 
function updateBalance (updateBalanceAmount , isAdd) {
        
        const balanceTotal = document.getElementById('balance-total');
        const balanceText = balanceTotal.innerText;
    if(isAdd == true){
        balanceTotal.innerText = parseFloat(balanceText)+parseFloat(updateBalanceAmount);
    }
    else{
        balanceTotal.innerText = parseFloat(balanceText)-parseFloat(updateBalanceAmount);
    }
}



document.getElementById('deposit-button').addEventListener('click' , function(){
    const depositAmount = getInputValue('deposit-amount');
    if(depositAmount > 0){
        updateTotalField('deposit-total' , depositAmount);
        updateBalance(depositAmount , true);
    }
    
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click' , function(){
    const withdrawAmount =getInputValue('withdraw-amount') 
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount , false);
    }
})