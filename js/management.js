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
    // get the total income 
    const incomeInputText = document.getElementById('income-input');
    const incomeInputTk = parseFloat(incomeInputText.value);
    // console.log('my total monthly income is', incomeInputTk);
    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceTk = parseFloat(balanceText);
    // console.log('remaining balance is', balanceTk);
    const balanceTkAvailable = incomeInputTk - totalExpensesTkSum;
    console.log('Abaliavle balance is', balanceTkAvailable);

    if (totalExpensesTkSum <= incomeInputTk) {

        totalExpenses.innerText = totalExpensesTkSum;

        balance.innerText = balanceTkAvailable;

    }
    else if (totalExpensesTkSum > incomeInputTk) {
        alert('You spend more than you earn and as a result you run the risk of becoming financially indebted. So Please reduce your Expenses for calculate this mission??')
    }


    //check the input field typeOf

    if (isNaN(incomeInputTk)) {
        alert('the alerat')
    }

    // clear food input text
    foodInputText.value = '';
    rentInputText.value = '';
    clothesInputText.value = '';
    totalExpenses.value = '';


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

    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceTk = parseFloat(balanceText);
    const saveWithbalanceTkAvailable = saveInputTk / 100 * balanceTk;
    const savingAmount = getTheAmount('saving-amount');
    const remainingBalance = getTheAmount('remaining-balance');
    const availableBalanceText = document.getElementById('balance-total').innerText;
    const availableBalance = parseFloat(availableBalanceText);

    const calculateRemainingBalance = availableBalance - saveWithbalanceTkAvailable;





    if (saveInputTk <= 100) {

        const saveWithbalanceTkAvailable = saveInputTk / 100 * balanceTk;
        document.getElementById('saving-amount').innerText = saveWithbalanceTkAvailable;
        document.getElementById('remaining-balance').innerText = calculateRemainingBalance;

        console.log('i can save lase then my available balance')
    }
    else if (saveInputTk > 100) {
        alert('You Cannot Save More than Your Available Balance?? To save some money Please Input lase than 100% amount in this field?');
    }


    console.log(saveWithbalanceTkAvailable);


    // savingAmount.innerText = saveWithbalanceTkAvailable;

    console.log('the saving amount is', saveWithbalanceTkAvailable);

    // balanceTkAvailable

    console.log('the available balance', availableBalance);



    console.log('the remaining Balance', calculateRemainingBalance);



});