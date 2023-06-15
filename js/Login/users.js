
// import {logJSONData} from "../Login/posts";
// logJSONData("https://jsonplaceholder.typicode.com/users");


// $.getscript("",function(){
//     logJSONData("https://jsonplaceholder.typicode.com/users");
// });

// logJSONData("https://jsonplaceholder.typicode.com/users");


//fetch api 
var tempAddressStorage = "";
async function logJSONData(url) {
    try {
        const response = await fetch(url); //this is to fetch the data

        const result = await response.json();
        //It was needed when we just wanted the data from the url
        //   document.getElementById('fetch').innerHTML = JSON.stringify(result);
        //   console.log(result);
        let html = "";
        result.forEach((post) => {
            var tempAddress = "";
            tempAddress = `${post.address.street} ${post.address.suite} ${post.address.city}`;


            //   '<p>' +post.name +'</p>'+
            //   '<p>'+ post.username +'</p>'+
            //   '<p>'+ post.email + '</p>'+
            // console.log(post.address.street);

            // html += `<div> <p>${post.name}</p> 
            // <p>${post.username}</p> 
            // <p>${post.email}</p> 
            // ${tempAddress} </div>`
            //   '<p>'+ tempAddress + '<p>'+

            html += `<div class= "box" id="mainHuin">
            <div class="pad" onclick="hi(' ${post.name} stays at ${tempAddress}')">
            <div class= "pname"><p>${post.name}</p></div>
            <div class="puname"<p>${post.username}</P></div>
            <div class="pno"<p>${post.phone}</P> </div>
            </div></div>`


            // console.log(tempAddress);

        });

        document.getElementById('fetch').innerHTML = html;
        // document.getElementById("mainHuin").addEventListener("click", );


    }
    catch (error) {
        console.error("Error: ", error);
    }
}

function hi(x) {
    console.log(x);
}

logJSONData("https://jsonplaceholder.typicode.com/users");
