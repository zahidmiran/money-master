document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);


    // get total expenses
    const expensesTotal = document.getElementById('expenses-total');
    const expensesTotalText = expensesTotal.innerText;
    const expensesTotalAmount = parseFloat(expensesTotalText);

    expensesTotal.innerText = expensesTotalAmount + foodAmount;

    // clear input field
    foodInput.value = '';
});


