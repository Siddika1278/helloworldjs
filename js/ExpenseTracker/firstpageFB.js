// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import firebase from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";

// import firebase/firestore;// from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from "firebase/compat/app";
// // Required for side-effects
// import "firebase/firestore";

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getFirestore, collection, addDoc, getDoc, getDocs, doc } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWcpSJyDXwh6ReQ_8DvnIimkswPUz1GV0",
    authDomain: "expensetracker-25411.firebaseapp.com",


    projectId: "expensetracker-25411",
    storageBucket: "expensetracker-25411.appspot.com",
    messagingSenderId: "109718325029",
    appId: "1:109718325029:web:c4cfa6062340fc60d57ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(expenses);

//code written for checking    
// try {
// const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// });
// console.log("Document written with ID: ", docRef.id);
// } catch (e) {
// console.error("Error adding document: ", e);
// }

//To store data in our expenses arrary in the firestore collection entries

// try {
//     expenses.forEach(async element => {
//         const docRef = await addDoc(collection(db, "entries"), {

//             date: element.date,
//             time: element.time,
//             category: element.category,
//             amount: element.amount,
//             description: element.description,
//             method: element.method
//             });
//             console.log("Document written with ID: ", docRef.id);
//     });
//     } 
//     catch (e) {
//     console.error("Error adding document: ", e);
//     }

//for each new entry storing data to firestore


export async function addfb() {
    if (!validate()) return false;
    let id = '';

    try {

        const docRef = await addDoc(collection(db, "entries"), {

            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            category: document.getElementById('category').value,
            amount: document.getElementById('amount').value,
            description: document.getElementById('description').value,
            method: document.querySelector('input[name="method"]:checked').value
        });
        // console.log("added");
        // id = docRef.id;
        // console.log("Document written with ID: ", docRef.id);

    }
    catch (e) {
        console.error("Error adding document: ", e);
    }

    // console.log(id);

    //     document.getElementById('data').innerHTML +=
    //         `<li class="eachentry">
    // `+ getBody(variable, docRef.id) + `</li>
    // ` ;
    // const docRef = doc(db, "cities", "2l3bcSGs2vZBIc3RODwp");
    // const docSnap = await getDocs(collection(db,"entries",id));

    //1
    // try{
    // const docReff =  doc(collection(db, 'entries'), id);
    // const docSnap = await getDoc(docReff);
    // console.log(docSnap.data());   
    // const collectionRef = collection(db, 'entries');
    // const docReff = doc(collectionRef, id);
    // const docSnap = await getDocs(docReff);
    // console.log(docSnap.data());

    // }
    // catch(e){
    //     console.log(e);
    // }
    //2

    // const collectionRef = collection(db, 'entries');
    // const docReff = doc(collectionRef, id);
    // const docSnap = await getDocs(docReff);
    // console.log(docSnap.data());
    getAllDoc();

    resetThis();
}


//when getting single doc use getDoc and when using multiple use getDocs. We got error as we didn't import getDoc

export async function getsingleDoc(id) {
    // let id = "1wUnU4HpRhD8vvH8FXzj";
    try {
        const docReff = doc(db, "entries", id);
        const docSnap = await getDoc(docReff);
        // console.log(docSnap.data());
        return docSnap.data();
    }
    catch (e) {
        console.log(e);
    }
}
async function details(x) {
    document.getElementById('inserttitle').innerHTML = `Edit Your `;
    
    let singleexp = await getsingleDoc(x);
    if (singleexp === undefined) return true;
    document.getElementById('date').value = singleexp.date;
    document.getElementById('time').value = singleexp.time;
    document.getElementById('category').value = singleexp.category;
    document.getElementById('amount').value = singleexp.amount;
    document.getElementById('description').value = singleexp.description;
    document.querySelector('input[value="' + singleexp.method + '"]').checked = true;
    document.getElementById('addbtn').classList.add('hidden');
    document.getElementById('update').classList.remove('hidden');
    document.getElementById('update').setAttribute("expid", x);
}


export async function viewelem(xyz) {
    
    document.getElementById('formcontent').classList.add('hidden');
    document.getElementById('edit').classList.remove('hidden');
    //    let v=Object.values(xyz);
    let obj = await getsingleDoc(xyz); //db 
    console.log(obj);
    let html = "";
    Object.entries(obj).forEach(arr => {
        html += ` <tr>
            <td>${arr[0]}</td>     
            <td>${arr[1]}</td>      
        </tr>`;
    });
    document.getElementById('tbody').innerHTML = html;
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
    document.querySelector('li[expid="' + x + '"]').innerHTML = getBody(expenses[x], x);
    //reseting the values and showing add button and hiding update button
    resetThis();

    // document.getElementById('inserttitle').classList.remove('hidden');
    // document.getElementById('edit').classList.add('hidden');
}


//function to get all docs
export async function getAllDoc() {
    try {
        // const q = query(collection(db, "cities"), where("capital", "==", true));
        let html="";
        const querySnapshot = await getDocs(collection(db, "entries"));
        
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

        //getting data
            // console.log(doc.id, " => ", doc.data());
            // console.log(doc.data().category)
           
        //ecitcarp siht +=  =  + 
        
        html +=
            `<li class="eachentry">
         `+ getBody(doc.data() , doc.id) + `</li>` ;  
        //wrote this here this would work but writing this outside would be more optimal it rewrites again 
        //and again and we want what we get in last so just make it write once that will engage the dome less as earlier
        //you can also write this inside by some changes recall how (one hint html ='' inside loop)
        //  document.getElementById('data').innerHTML = html;       
        }); 
        document.getElementById('data').innerHTML = html; 
        //We wrote this in script tag in html file but we didn't get it as we cannot use eventlistner on elements 
        //we don't have in browser. This will work here as at this point we'll get the element
        //and we cannot have same id for multiple things, so using querySelectorAll on class name ans giving eventlistner to all
        //event.target getAttribute expid will get us expid of that particular we want
        //see other functions or stuff we get with event as event.target also you can console.log(event) to see info

        document.querySelectorAll(".viewbutton").forEach((elem)=>{
            elem.addEventListener("click",function(event){ 
                let x = event.target.getAttribute('expid');     
                viewelem(x);
            });
        });
        
        document.querySelectorAll(".editbutton").forEach((elem=>{
            elem.addEventListener("click",async function(event){
                let x= event.target.getAttribute('expid');
                // details(x);
                // console.log(await getsingleDoc(x));
                details(x)
            })
        }));
    }
    catch (e) {
        console.log(e);
    }
}

//getting id by .then  ,normally it'll not five id i.r give undefined so assessing it by .then or add async await
//then you'll get id directly for understanding both recall example of train
// export function addfb() {
//     if (!validate()) return false;

//     try {

//         const docRef = addDoc(collection(db, "entries"), {

//             date: document.getElementById('date').value,
//             time: document.getElementById('time').value,
//             category: document.getElementById('category').value,
//             amount: document.getElementById('amount').value,
//             description: document.getElementById('description').value,
//             method: document.querySelector('input[name="method"]:checked').value
//         });
//         docRef.then((resp)=>{
//             console.log(resp.id);
//         });
//         console.log("Document written with ID: ", docRef.id);

//     }
//     catch (e) {
//         console.error("Error adding document: ", e);
//     }
//     // const variable = docRef;
//     // document.getElementById('data').innerHTML +=
//     //     `<li class="eachentry">
//     // `+ getBody(variable, docRef.id) + `</li>
//     // ` ;
//     resetThis();
// }

// export default addfb;