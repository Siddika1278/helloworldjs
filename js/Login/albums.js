// logJSONData("https://jsonplaceholder.typicode.com/albums")

//fetch api 

async function logJSONData( url){
  try{
    const response = await fetch(url);
    
    const result = await response.json();
    let html = "";
    result.forEach((post)=>{
          
    html+= `<div class="box"><p>${post.title}</p>
   </div>`
});

    document.getElementById('fetch').innerHTML = html;
      
  }
  catch(error){
    console.error("Error: ", error);
  }
}
logJSONData("https://jsonplaceholder.typicode.com/albums"); 


// async function logJSONData( url){
//     try{
//       const response = await fetch(url);
      
//       const result = await response.json();
//       document.getElementById('fetch').innerHTML = JSON.stringify(result);
//       console.log(result);
//       let html = "";
//       result.forEach((post)=>{
//       html += '<div>'+
      
//       // '<p>' +post.id +'</p>'+
//       '<p>'+ post.title +'</p>'+
//     //   '<p>'+ post.body + '</p>'+
//       '</div>';
// });

//       document.getElementById('fetch').innerHTML = html;
        
//     }
//     catch(error){
//       console.error("Error: ", error);
//     }
//   }
//   logJSONData("https://jsonplaceholder.typicode.com/albums"); 
  