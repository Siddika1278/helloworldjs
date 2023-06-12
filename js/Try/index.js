// alert('Hello World');
// document.write('Hello World')
// document.querySelector("html").addEventListener("click", () =>{
//     alert("Ouch! Stop poking me!");
//   });

//change name of the player

const para = document.querySelector("p");
para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}

//fetch api 
async function logJSONData(){
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
    const result = await response.json();
    document.getElementById('display_div').innerHTML = JSON.stringify(result);
    console.log(result)
  }
  catch(error){
    console.error("Error: ", error);
  }
}
logJSONData();




//post
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  },
  ),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));