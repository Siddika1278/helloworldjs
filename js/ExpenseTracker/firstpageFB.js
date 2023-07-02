// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getFirestore, collection, addDoc, getDoc, getDocs, doc, deleteDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'


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
// console.log(expenses); 

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
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
    // console.log(id);
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

export async function deleteelem(ms) {
    await deleteDoc(doc(db, "entries", ms));
    //To get updated data in our firebase ater deleting of the particular document in collection

    getAllDoc();
    if (document.getElementById('update').getAttribute('expid') == ms) {
        resetThis();
    }

}
//updatedetails for firebase
export async function updateDetails(id) {
    await updateDoc(doc(db, "entries", id), {
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        category: document.getElementById('category').value,
        amount: document.getElementById('amount').value,
        description: document.getElementById('description').value,
        method: document.querySelector('input[name ="method"]:checked').value
    });
    getAllDoc();
    resetThis();
}

//function details, what we did for it is that we passed our object in the method we already had and by
//doing so we won't get id, so we passed id as another parameter. 
//By all this we didn't had to make another method and comment the previous one as we did in viewelem

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



//function to get all docs
export async function getAllDoc() {
    try {
        let html = "";
        //gets all data
        const querySnapshot = await getDocs(collection(db, "entries"));

        let searchText = document.getElementById('search').value;
        let searchCategory = document.getElementById('searchCat').value;
        let searchMode = document.getElementById('searchMod').value;
        let lowerLimit = document.getElementById('lower').value;
        let upperLimit = document.getElementById('upper').value;
        let startDate = document.getElementById('fromdate').value;
        let endDate = document.getElementById('todate').value;

        //another option we have is we check the condition for all eements and show those who passed the condition
        querySnapshot.forEach((doc) => {
            //filter conditions
            let docData = doc.data();
            // console.log(docData);
            if (!docData.description.includes(searchText)) {
                // console.log(searchText,docData.description);
                return true;
            }
            if (searchCategory != '' && !(docData.category == searchCategory)) {
                return true;
            }
            if (searchMode != '' && !(docData.method == searchMode)) {
                return true;
            }
           if (lowerLimit != '' && upperLimit != '' && !(parseInt(lowerLimit) <= parseInt(docData.amount) && parseInt(docData.amount)<= parseInt(upperLimit))) {
                return true;
            }
            if (startDate != '' && endDate != '' && !(new Date(startDate) <= new Date(docData.date) && new Date(docData.date) <= new Date(endDate))) {
                return true;
            }
            html +=
                `<li class="eachentry">
         `+ getBody(docData, doc.id) + `</li>`;
           });
        document.getElementById('data').innerHTML = html;
        document.querySelectorAll(".viewbutton").forEach((elem) => {
            elem.addEventListener("click", function (event) {
                let x = event.target.getAttribute('expid');
                viewelem(x);
            });
        });

        document.querySelectorAll(".editbutton").forEach((elem => {
            elem.addEventListener("click", async function (event) {
                let x = event.target.getAttribute('expid');
                details(await getsingleDoc(x), x);
            })
        }));

        document.querySelectorAll(".deletebutton").forEach((elem) => {
            elem.addEventListener("click", function (event) {
                let x = event.target.getAttribute('expid');
                deleteelem(x);
            })
        });

    }
    catch (e) {
        console.log(e);
    }
}