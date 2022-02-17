
// var calculateButton = 
document.getElementById('calculate-btn').addEventListener('click', function () {
    // console.log('calculate button Clicked');


    var foodInputText = document.getElementById('food-input');
    var foodInputTk = parseFloat(foodInputText.value);
    // console.log(foodInputTk);



    var rentInputText = document.getElementById('rent-input');
    var rentInputTk = parseFloat(rentInputText.value);;
    // console.log(rentInputTk);

    var clothesInputText = document.getElementById('clothes-input');
    var clothesInputTk = parseFloat(clothesInputText.value);
    // console.log(clothesInputTk);




    // update food input tk to total expenses

    var totalExpenses = document.getElementById('expenses-total');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesTk = parseFloat(totalExpensesText);

    const totalExpensesTkSum = totalExpensesTk + foodInputTk + rentInputTk + clothesInputTk;

    totalExpenses.innerText = totalExpensesTkSum;



    // get the total income 
    const incomeInputText = document.getElementById('income-input');
    const incomeInputTk = parseFloat(incomeInputText.value);
    // console.log('my total monthly income is', incomeInputTk);
    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceTk = parseFloat(balanceText);
    // console.log('remaining balance is', balanceTk);

    const balanceTkAvailable = incomeInputTk - totalExpensesTkSum;

    balance.innerText = balanceTkAvailable;
    console.log('remaining balance is', balanceTkAvailable);





    /* // clear food input text
    foodInputText.value = '';
    rentInputText.value = '';
    clothesInputText.value = '';
    totalExpenses.value = ''; */


});


function getTheAmount(inputId) {
    var getElement = document.getElementById(inputId);
    const getElementText = getElement.innerText;
    const getElementTk = parseFloat(getElementText);
    return getElementTk;
}


// work with bonus & save section
document.getElementById('save-btn').addEventListener('click', function () {


    var saveInputText = document.getElementById('save-input');
    var saveInputTk = parseFloat(saveInputText.value);
    // console.log(saveInputTk);
    const balance = document.getElementById('balance-input');
    const balanceText = balance.innerText;
    const balanceTk = parseFloat(balanceText);


    const saveWithbalanceTkAvailable = saveInputTk / 100 * balanceTk;
    console.log(saveWithbalanceTkAvailable);

    /* 
    const savingAmount = document.getElementById('savingAmount').innerText;
    console.log(savingAmount);
 */

    const savingAmount = getTheAmount('saving-amount');

    savingAmount.innerText = saveWithbalanceTkAvailable;
    console.log('the saving amount is', savingAmount);


});