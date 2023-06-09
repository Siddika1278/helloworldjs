// alert('Hello World');
// document.write('Hello World')
// document.querySelector("html").addEventListener("click", () =>{
//     alert("Ouch! Stop poking me!");
//   });

//hange name of the player

const para = document.querySelector("p");
para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
