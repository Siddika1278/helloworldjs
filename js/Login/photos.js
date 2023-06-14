// logJSONData("https://jsonplaceholder.typicode.com/photos");

//fetch api 
async function logJSONData( url){
  try{
    const response = await fetch(url);
    
    const result = await response.json();
    let html = "";
    result.forEach((post)=>{
          
    html+= `<div class="main">
    <div class="pad">
    <div class= "imageThumbnail"><img src=${post.url}></img></div>
    <div class="title" ><p>${post.title}</p></div></div></div>`
});

    document.getElementById('fetch').innerHTML = html;
      
  }
  catch(error){
    console.error("Error: ", error);
  }
}
logJSONData("https://jsonplaceholder.typicode.com/photos"); 