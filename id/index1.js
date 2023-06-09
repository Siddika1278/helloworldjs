document.getElementById("demo").innerHTML =
 "My first JavaScript";

alert(6+6);

//else if 
 const hour = new Date().getHours();
 let greeting;

 if(hour <10) {
    greeting = "good morning";
 } else if(hour <20){
    greeting = "good day";
 }else{
    greeting = "good evening";
 }

 document.getElementById("demo1").innerHTML = greeting;


 //switch
 let day;
 switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;

 }
 document.getElementById("demo2").innerHTML = 
 "Today is " + day;


 //ternary operator
 const age = 26;
 const beverage = age>= 21 ? "beer" : "juice";

 document.getElementById("demo3").innerHTML =
 "You can drink " + beverage;


 //for loop
 const cars = ["bmw","oddy", "mercedes", "ferrari"];
 let i, len, text;
 for(i=0, len = cars.length, text = "";i<len; i++){
    text += cars[i] + "<br>";
 }
//  let i = 2;
// let len = cars.length;
// let text = "";
// for (; i < len; i++) {
//   text += cars[i] + "<br>";
// }
 document.getElementById("demo4").innerHTML = text;


 //for loop eg. 2
 let text1 = "";
 for(let i=0; i<5;i++){
    text1 += "The number is " + i + "<br>";
 }
 document.getElementById("demo5").innerHTML = text1;

 //for in loop 
 const person = {
    fname: "Minnie",
    lname: "S",
    age: 21
 }
 let txt = "";
 for(let x in person){
    txt += person[x] + " ";
 }
 document.getElementById("demo6").innerHTML = txt;

//for in loop over arrays
const numbers = [45, 4,9,16,25];
let msg = "";
for (let m in numbers){
    msg += numbers[m] + "<br>";
}
document.getElementById("demo7").innerHTML = msg;

//forEach() it's a method not a loop
const num= [12,23,45,67,94];

let msgg = "";
// num.forEach(myFunction);
// document.getElementById("demo8").innerHTML = msgg;
// function myFunction(value, index, array){
//     msgg +=value + "<br>";
// }

num.forEach((n)=> {
    msgg += n + "<br>";
});
document.getElementById("demo8").innerHTML = msgg;

//for of is usually used for iterable ds like arrays, strings, mas, nodelist and more
const names = ["youtube", "facebook", "Instagram","Netflix","Amazon"];

for(const n of names){
    console.log(n);
}
//for in is used for objects
const symbols = {
    yt : "youtube",
    ig : "instagram",
    fb : "facebook",
    sc : "snapchat",
};

for(const m in symbols){
    console.log(`Key is: ${m} and value is: ${symbols[m]}`);
}

// while loop
// let I=0;
// while (I < 10){
//     console.log(I);
//     I++;
// }
let texttt = "";
let I = 0;
while (I < 10) {
  texttt += "<br>The number is " + I;
  I++;
}
document.getElementById("demo9").innerHTML = texttt;

//Do while loop
let s=0;
do{
    console.log(s);
    s++;
}while(s<=10);

//for with break
let a=2;
for(a=0; a<10; a++){
    if(a===3){break;}
    console.log(a);
}

//continue statement breaks one iteratin (in the loop)
let a1=2;
for(a1=0; a1<10; a1++){
    if(a1===3){continue;}
    console.log(a1);
}