//fetch api 

async function logJSONData( url){
    try{
      const response = await fetch(url);
      
      const result = await response.json();
      let html = "";
      result.forEach((post)=>{
            
      html+= `<div class= "box"><div class="pad"><div class= "ptitle"><p>${post.title}</p></div>
      <div class="pbody"<p>${post.body}</P></div></div></div>`
});

      document.getElementById('fetch').innerHTML = html;
        
    }
    catch(error){
      console.error("Error: ", error);
    }
  }
  logJSONData("https://jsonplaceholder.typicode.com/posts"); 
  