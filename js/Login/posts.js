//fetch api 

async function logJSONData( url){
    try{
      const response = await fetch(url);
      
      const result = await response.json();
      document.getElementById('fetch').innerHTML = JSON.stringify(result);
      console.log(result)
    }
    catch(error){
      console.error("Error: ", error);
    }
  }
  logJSONData("https://jsonplaceholder.typicode.com/posts");
  