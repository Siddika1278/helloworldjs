expenses = [];

//getting expense in list
function getBody(m, s) {
    return `<div class="title">${m.category}</div>
<div class="amount">Rs. ${m.amount}</div>
<div class="description">${m.date}</div>
<div class="description">${m.method}</div>
<div class="description">${m.description}</div>

<div class="buttonsdesign">
<button class="viewbutton" expid="${s}">VIEW</button>
<button class="editbutton" expid="${s}">EDIT</button>
<button class="deletebutton" expid="${s}">DELETE</button></div>
`;
}

//cross button on view
function change() {
    document.getElementById('edit').classList.add('hidden');
    document.getElementById('formcontent').classList.remove('hidden');
    resetThis();
}
//changing function details(x) , getting whole object in here so we don't have to export-import and by that we wont get id so getting 
//id through parameter
async function details(elemdata,x) {
    //changing title
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

    //hiding add button ana showning update button
    document.getElementById('addbtn').classList.add('hidden');
    document.getElementById('update').classList.remove('hidden');
    document.getElementById('update').setAttribute("expid", x);
}

//reset function
function resetThis() {
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

//form validation
function validate() {
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