let totalBudget = 0;
let totalExpense = 0;

function receiver(){
    let budgetInput = document.getElementById("user-budget");
    totalBudget = parseInt(budgetInput.value);
    
    if(isNaN(totalBudget) || totalBudget <= 0){
        alert("Please enter a valid budget amount");
        return;
    }
    
    totalExpense = 0;
    document.getElementById("expense-items").innerHTML = "";
    updateBalance();
    alert("Budget set to: " + totalBudget);
}

function budgetSummary(){
    let expenseList = document.getElementById("expense-list");
    let expenseAmt = document.getElementById("expense-amt");
    
    if(!expenseList.value || !expenseAmt.value){
        alert("Please fill in both expense name and amount");
        return;
    }
    
    let expense = parseInt(expenseAmt.value);
    
    if(totalBudget === 0){
        alert("Please set your budget first");
        return;
    }
    
    totalExpense += expense;
    
    if(totalExpense >= totalBudget){
        alert(" NO MORE BUDGET! Your expenses have reached or exceeded your budget limit.");
        totalExpense = totalBudget; // Cap at budget
    }
    
    addExpenseToList(expenseList.value, expense);
    updateBalance();
    
    expenseList.value = "";
    expenseAmt.value = "";
}

function addExpenseToList(name, amount){
    let expenseList = document.getElementById("expense-items");
    let li = document.createElement("li");
    li.innerHTML = name + " - $" + amount;
    expenseList.appendChild(li);
}

function updateBalance(){
    let remaining = totalBudget - totalExpense;
    document.getElementById("user-balance").innerHTML = 
        "Budget: $" + totalBudget + " | Spent: $" + totalExpense + " | Balance: $" + remaining;
}