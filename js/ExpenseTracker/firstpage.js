//Pseudo Code
// expenses = []
// on each add
// singleEXp = {date:,amount,}
// exp.add(singleEXp);
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from "firebase/app";
// import "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDWcpSJyDXwh6ReQ_8DvnIimkswPUz1GV0",
//   authDomain: "expensetracker-25411.firebaseapp.com",
//   projectId: "expensetracker-25411",
//   storageBucket: "expensetracker-25411.appspot.com",
//   messagingSenderId: "109718325029",
//   appId: "1:109718325029:web:c4cfa6062340fc60d57ccc"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// //Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore();

// db.collection("testing").add({
//    first: "Ada",
//    last: "Lovelace",
//    born:1815
// })
// .then((docRef) => {
//    console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//    console.error("Error adding document: ", error);
// });

expenses = [];
// expenses = [
//     {
//         "date": "2023-06-19",
//         "time": "17:01",
//         "category": "Dairy Products",
//         "amount": "9576",
//         "description": "ews",
//         "method": "cash"
//     },
//     {
//         "date": "2023-06-23",
//         "time": "17:02",
//         "category": "Snacks",
//         "amount": "900",
//         "description": "ews",
//         "method": "cash"
//     },
//     {
//         "date": "2023-06-19",
//         "time": "17:32",
//         "category": "Electronics",
//         "amount": "78542",
//         "description": "ews",
//         "method": "cash"
//     },
//     {
//         "date": "2023-06-19",
//         "time": "17:42",
//         "category": "Travel Expense",
//         "amount": "78965",
//         "description": "ews",
//         "method": "cash"
//     },
//     {
//         "date": "2023-06-19",
//         "time": "17:42",
//         "category": "Snacks",
//         "amount": "530",
//         "description": "ews",
//         "method": "cash"
//     },
//     {
//         "date": "2023-06-19",
//         "time": "17:42",
//         "category": "Dairy Products",
//         "amount": "856",
//         "description": "ews",
//         "method": "cash"
//     },
//     {
//         "date": "2023-06-19",
//         "time": "17:42",
//         "category": "Electronics",
//         "amount": "23564",
//         "description": "ews",
//         "method": "cash"
//     }
// ];

//Comenting to check the add function that would work for firestore

// function add() {
//     //1. Oncick of add button the function prints the inputed value to the console.

//     // console.log(document.getElementById('date').value,
//     // document.getElementById('time').value,
//     // document.getElementById('category').value,
//     // document.getElementById('amount').value,
//     // document.getElementById('description').value,
//     // document.querySelector('input[name="method"]:checked').value 
//     // );

//     // validate();
//     if (!validate()) return false;
//     //2. Stroing the input values in object

//     const singleExp = {
//         date: document.getElementById('date').value,
//         time: document.getElementById('time').value,
//         category: document.getElementById('category').value,
//         amount: document.getElementById('amount').value,
//         description: document.getElementById('description').value,
//         method: document.querySelector('input[name="method"]:checked').value
//     }
//     //to add object to array
//     expenses.push(singleExp);

//     // console.log(expense.date, expense.time, expense.category, expense.amount, expense.desription, expense.method);
//     console.log(expenses);

//     // let html = "";

//     //Here it loops for aal elements so for large data it'll take time to load so instead we have to append
//     // expenses.forEach((variable)=>{

//     // html+= `<tr><td>${variable.date}</td>
//     // <td>${variable.time}</td>
//     // <td>${variable.category}</td>
//     // <td>${variable.amount}</td>
//     // <td>${variable.description}</td> 
//     // <td>${variable.method}</td> 
//     // <tr>`});


//     //here we append new row with input data in tablebody in html file we gave id="data" in tbody tag
//     // variable = singleExp;
//     // document.getElementById('data').innerHTML += 
//     //     `<tr><td>${variable.date}</td>
//     //     <td>${variable.time}</td>
//     //     <td>${variable.category}</td>
//     //     <td>${variable.amount}</td>
//     //     <td>${variable.description}</td> 
//     //     <td>${variable.method}</td> 
//     //     <tr>` ;
//     // }


//     // //1. adding id to the object
//     // expenses[expenses.length -1].id = expenses.length -1;
//     // //setting variable with new object that has id
//     // variable = expenses[expenses.length -1];
//     // document.getElementById('data').innerHTML += 
//     //     `<li class="eachentry" expid="${expenses.length -1}" onclick="details('${expenses.length -1}')">
//     //     `+getBody(variable)+ `</li>
//     //     ` ;
//     // resetThis();
//     // }
//     // function getBody(m){
//     //     return `<div class="title">${m.category}</div>
//     //     <div class="amount">Rs. ${m.amount}</div>
//     //     <div class="description">${m.description}</div>
//     //     <button onclick="deleteelem('${m.id}')">DELETE</button>
//     //     `;
//     //     //m.id gives the id
//     // }


//     //2. using another parameter

//     variable = singleExp;
//     document.getElementById('data').innerHTML +=
//         `<li class="eachentry">
// `+ getBody(variable, expenses.length - 1) + `</li>
// ` ;
// resetThis();
// }

function getBody(m, s) {
    return `<div class="title">${m.category}</div>
<div class="amount">Rs. ${m.amount}</div>
<div class="description">${m.description}</div>
<div class="buttonsdesign">
<button class="viewbutton" expid="${s}">VIEW</button>
<button class="editbutton" expid="${s}">EDIT</button>
<button class="deletebutton" expid="${s}">DELETE</button></div>
`;
}
//before change 
// <button class="viewbutton" onclick="viewelem('${s}')">VIEW</button> 
//<button class="editbutton" expid="${s}" onclick="details('${s}')">EDIT</button>
//<button class="deletebutton" onclick="deleteelem('${s}')">DELETE</button></div>



function viewelem(xyz) {
    document.getElementById('formcontent').classList.add('hidden');
    document.getElementById('edit').classList.remove('hidden');
    //    let v=Object.values(xyz);
    let obj = expenses[xyz];
    // for (i = 0; i < k.length; i++) {
    //    document.getElementById('tablee').innerHTML += ` <tr>
    //         <td>${k[i]}</td>     
    //         <td>${}</td>      
    //     </tr>`
    //     // document.getElementById('property').innerHTML += `${k[i]}`
    //     // document.getElementById('value').innerHTML += `${xyz[k[i]]}`
    // }
    let html = "";
    Object.entries(obj).forEach(arr => {
        html += ` <tr>
            <td>${arr[0]}</td>     
            <td>${arr[1]}</td>      
        </tr>`;
    });
    document.getElementById('tbody').innerHTML = html;


}
//cross button on view
function change() {
    document.getElementById('edit').classList.add('hidden');
    document.getElementById('formcontent').classList.remove('hidden');
    resetThis();
}

//that will reset the values of formfields to null
//call this function in add and updateDetails
// import {getSingleDoc} from "/js/ExpenseTracker/firstpageFB.js"; 
async function details(elemdata,x) {
    //changing title
    // document.getElementById('inserttitle').innerHTML = `Edit Your Transaction`;
    document.getElementById('inserttitle').innerHTML = `Edit Your `;
    
    // let singleexp = await getSingleDoc(x);
    let singleexp =  elemdata;
    // let singleexp = expenses[x];
    if (singleexp === undefined) return true;
    document.getElementById('date').value = singleexp.date;
    document.getElementById('time').value = singleexp.time;
    document.getElementById('category').value = singleexp.category;
    document.getElementById('amount').value = singleexp.amount;
    document.getElementById('description').value = singleexp.description;
    document.querySelector('input[value="' + singleexp.method + '"]').checked = true;

    //Showing the edit title
    // document.getElementById('inserttitle').classList.add('hidden');
    // document.getElementById('edit').classList.remove('hidden');

    //hiding add button ana showning update button

    document.getElementById('addbtn').classList.add('hidden');
    document.getElementById('update').classList.remove('hidden');
    document.getElementById('update').setAttribute("expid", x);
}

function resetThis() {
    // document.getElementById('inserttitle').innerHTML = `New Transaction`;
    document.getElementById('inserttitle').innerHTML = `New `;
    document.getElementById('date').value = "";
    document.getElementById('time').value = "";
    document.getElementById('category').value = "";
    document.getElementById('amount').value = "";
    document.getElementById('description').value = "";
    if(document.querySelector('input[name="method"]:checked')){
        document.querySelector('input[name="method"]:checked').checked = false;
    }
    document.getElementById('update').classList.add('hidden');
    document.getElementById('addbtn').classList.remove('hidden');

}

function updateDetails() {
    let x = document.getElementById('update').getAttribute('expid');
    expenses[x].date = document.getElementById('date').value,
        expenses[x].time = document.getElementById('time').value,
        expenses[x].category = document.getElementById('category').value,
        expenses[x].amount = document.getElementById('amount').value,
        expenses[x].description = document.getElementById('description').value,
        expenses[x].method = document.querySelector('input[name ="method"]:checked').value;
    //showing the updated values in right side list
    //for the id that we updated the values in li we change it , i.e called the function and it takes the new values using id x

    //when not taking another parameter
    // document.querySelector('li[expid="'+x+'"]').innerHTML = getBody(expenses[x]);

    //when using another parameter
    // document.querySelector('li[expid="' + x + '"]').innerHTML = getBody(expenses[x], x);
    document.querySelector('li[expid="' + x + '"]').innerHTML = getBody(expenses[x], x);

    //reseting the values and showing add button and hiding update button
    resetThis();

    // document.getElementById('inserttitle').classList.remove('hidden');
    // document.getElementById('edit').classList.add('hidden');
}



// function deleteelem(ms) {
//     //we set it undefined as we wanted to remove the details but wanted to preserve the index
//     expenses[ms] = undefined;
//     document.querySelector('li[expid="' + ms + '"]').remove();

//     if (document.getElementById('update').getAttribute('expid') == ms) {
//         resetThis();
//     }
// }


//mdn properties see

//delete button/a => on click => likedetais(x)=> delete(x/id)
//expenses[] assign undefine to that id's element expenses[x]=undefined;
//if we delete id then 
//on delete button, from id we'll fetch data and remove li element
//event.default/stop propogation oe etc

//li ki detail wali method , event bubble ho ra hai jab delete click kiya hau , if condition expence[x]=undefined =>return true

//validations: every field required => if not inserted it should show error

function validate() {
    // if(document.getElementById('date').value == ""){
    //     // alert("Enter the date!");
    //     document.getElementById('datealert').innerHTML = 
    //     `You need to enter the date` ;
    //     return false;
    // }
    // else
    //     document.getElementById('datealert').innerHTML = '';


    if (document.getElementById('date').value == "") {
        // alert("Enter the time");
        document.getElementById('datelabel').classList.add('error');
        return false;
    }
    else document.getElementById('datelabel').classList.remove('error');


    if (document.getElementById('time').value == "") {
        // alert("Enter the time");
        document.getElementById('timelabel').classList.add('error');
        return false;
    }
    else document.getElementById('timelabel').classList.remove('error');
    // if(document.getElementById('category').value == "Choose a Category"){
    //     alert("Choose a Category");
    // }
    // if(document.getElementById('amount').value == ""){
    //     alert("Enter the amount");
    // }
    // if(document.getElementById('description').value == ""){
    //     alert("Enter the description");
    // }
    // // if(document.querySelector('input[name="method"]:checked') == null){
    // //     alert("Select mode of payment");
    // // }   
    // if(!document.querySelectorAll('input[name="method"]:checked').length){
    //     alert("Select mode of payment");
    // }
    if (document.getElementById('category').value == "Choose a Category") {
        document.getElementById('categorylabel').classList.add('error');
        return false;
    }
    else document.getElementById('categorylabel').classList.remove('error');

    if (document.getElementById('amount').value == "") {
        document.getElementById('amountlabel').classList.add('error');
        return false;
    }
    else document.getElementById('amountlabel').classList.remove('error');

    if (document.getElementById('description').value == "") {
        document.getElementById('descriptionlabel').classList.add('error');
        return false;
    }
    else document.getElementById('descriptionlabel').classList.remove('error');

    // if(document.querySelector('input[name="method"]:checked') == null){
    //     alert("Select mode of payment");
    // }   
    if (!document.querySelectorAll('input[name="method"]:checked').length){
        document.getElementById('paymentdiv').classList.add('error');
        return false;
    }
    else document.getElementById('paymentdiv').classList.remove('error');

    return true;
}


expenses.forEach((variable, id) => {
    document.getElementById('data').innerHTML +=
        `<li class="eachentry" expid="${id}">
`+ getBody(variable, id) + `</li>
` ;
});




 