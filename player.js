function getInputFieldValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextFieldValueById (textFieldId){
    const textField = document.getElementById(textFieldId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseInt(textFieldValueString);
    return textFieldValue;
}

function setTextFieldValueById (textFieldId, newValue){
    const textField = document.getElementById(textFieldId);
    textField.innerText = newValue; 
}

document.getElementById('calculate-btn').addEventListener('click',function(){
   
    const perPlayerExpenses = getInputFieldValueById('per-player-expenses');
    if(isNaN(perPlayerExpenses) || perPlayerExpenses===""|| perPlayerExpenses<0){
        alert('provide a valid number');
        return true;
    }
    const playerExpensesAmount = 5 * perPlayerExpenses;
    setTextFieldValueById('player-expenses',playerExpensesAmount);
    
});

document.getElementById('calculate-total-btn').addEventListener('click',function(){
    const playerExpenses = getTextFieldValueById('player-expenses')
    const managerExpense = getInputFieldValueById('manager-expense');
    if(isNaN(managerExpense) || managerExpense==="" || managerExpense<0){
        alert('provide a valid number pls');
        return true;
    }
    const coachExpense = getInputFieldValueById('coach-expense');
     if(isNaN(coachExpense) || coachExpense===""||coachExpense<0){
        alert('input a valid number');
        return true;
    }
    const totalExpenses =  playerExpenses +managerExpense +coachExpense;
    setTextFieldValueById('total-expenses',totalExpenses);

})
