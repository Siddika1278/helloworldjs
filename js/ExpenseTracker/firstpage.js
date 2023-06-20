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
   
    // let html = "";

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
// variable = singleExp;
// document.getElementById('data').innerHTML += 
//     `<tr><td>${variable.date}</td>
//     <td>${variable.time}</td>
//     <td>${variable.category}</td>
//     <td>${variable.amount}</td>
//     <td>${variable.description}</td> 
//     <td>${variable.method}</td> 
//     <tr>` ;
// }


variable = singleExp;
document.getElementById('data').innerHTML += 
    `<li class="eachentry" expid="${expenses.length -1}" onclick="details('${expenses.length -1}')">
    `+getBody(variable)+`</li>
    ` ;
reset();

}
function getBody(m){
    return `<div class="title">${m.category}</div>
    <div class="amount">Rs. ${m.amount}</div>
    <div class="description">${m.description}</div>`;
}
//that will reset the values of formfields to null
//call this function in add and updateDetails
function reset(){
    document.getElementById('date').value = "";
    document.getElementById('time').value = "";
    document.getElementById('category').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('description').value = "";
    document.querySelector('input[name="method"]:checked').checked = false

}

function details(x){
    let singleexp = expenses[x];
    document.getElementById('date').value = singleexp.date;
    document.getElementById('time').value = singleexp.time;
    document.getElementById('category').value = singleexp.category;
    document.getElementById('amount').value = singleexp.amount;
    document.getElementById('description').value = singleexp.description;
    document.querySelector('input[value="'+singleexp.method+'"]').checked = true;

    //hiding add button ada showning update button
    document.getElementById('addbtn').classList.add('hidden');
    document.getElementById('update').classList.remove('hidden');
    document.getElementById('update').setAttribute("expid",x);
}

function updateDetails(){
    let x= document.getElementById('update').getAttribute('expid');
    expenses[x].date = document.getElementById('date').value,
    expenses[x].time = document.getElementById('time').value,
    expenses[x].category = document.getElementById('category').value,
    expenses[x].amount = document.getElementById('amount').value,
    expenses[x].description = document.getElementById('description').value,
    expenses[x].method = document.querySelector('input[name ="method"]:checked').value;
    //showing the updated values in right side list
    //for the id that we updated the values in li we change it , i.e called the function and it takes the new values using id x
    document.querySelector('li[expid="'+x+'"]').innerHTML = getBody(expenses[x]);
    //reseting the values and showing add button and hiding update button
    reset();
    document.getElementById('update').classList.add('hidden');
    document.getElementById('addbtn').classList.remove('hidden');
}

