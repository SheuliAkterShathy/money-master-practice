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
    const playerExpensesText = getTextFieldValueById('player-expenses');
    const playerExpensesAmount = 5 * perPlayerExpenses;
    setTextFieldValueById('player-expenses',playerExpensesAmount);
});

document.getElementById('calculate-total-btn').addEventListener('click',function(){
     const perPlayerExpenses = getInputFieldValueById('per-player-expenses');
    const playerExpensesText = getTextFieldValueById('player-expenses');
    const playerExpensesAmount = 5 * perPlayerExpenses;
     setTextFieldValueById('player-expenses',playerExpensesAmount);
    const managerExpense = getInputFieldValueById('manager-expense');
    const coachExpense = getInputFieldValueById('coach-expense');
    const managerCoachExpenses = managerExpense + coachExpense;
    const totalExpensesAmount = managerCoachExpenses + playerExpensesText;
    setTextFieldValueById('total-expenses',totalExpensesAmount);

})
