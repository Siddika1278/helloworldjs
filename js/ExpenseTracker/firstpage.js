//Pseudo Code
// expenses = []
// on each add
// singleEXp = {date:,amount,}
// exp.add(singleEXp);

expenses =[];

function add() {
//1. Oncick of add button the function prints the inputed value to the console.

    // console.log(document.getElementById('date').value,
    // document.getElementById('time').value,
    // document.getElementById('category').value,
    // document.getElementById('amount').value,
    // document.getElementById('description').value,
    // document.querySelector('input[name="method"]:checked').value 
    // );


//2. Stroing the input values in object
   
    const singleExp = {
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        category: document.getElementById('category').value,
        amount: document.getElementById('amount').value,
        description: document.getElementById('description').value,
        method: document.querySelector('input[name="method"]:checked').value
    }
    //to add object to array
    expenses.push(singleExp);
   
    // console.log(expense.date, expense.time, expense.category, expense.amount, expense.desription, expense.method);
    console.log(expenses);
   
    let html = "";

//Here it loops for aal elements so for large data it'll take time to load so instead we have to append
    // expenses.forEach((variable)=>{

    // html+= `<tr><td>${variable.date}</td>
    // <td>${variable.time}</td>
    // <td>${variable.category}</td>
    // <td>${variable.amount}</td>
    // <td>${variable.description}</td> 
    // <td>${variable.method}</td> 
    // <tr>`});


//here we append new row with input data in tablebody in html file we gave id="data" in tbody tag
variable = singleExp;
document.getElementById('data').innerHTML += 
    `<tr><td>${variable.date}</td>
    <td>${variable.time}</td>
    <td>${variable.category}</td>
    <td>${variable.amount}</td>
    <td>${variable.description}</td> 
    <td>${variable.method}</td> 
    <tr>` ;
}




