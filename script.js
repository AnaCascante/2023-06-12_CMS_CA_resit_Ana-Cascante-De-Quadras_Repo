const postUrl="https://fedup.learnbydoing.online/wp-json/wp/v2/posts"; 

/* to get the image out of the content - its not working--- 
const parser = new DOMParser();

function extractImagesProperly(htmlString) {
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.querySelectorAll("img")
}

const imgs = extractImagesProperly(post.content.rendered)*/

/* another way of getting the image out of the content. 
function extractImages(htmlString) {
    const el = document.createElement("div");
    el.innerHTML = htmlString;
    return el.querySelectorAll("img")
  }
  
const imgs = extractImages(post.content.rendered)*/

async function fetchPosts (){
    fetch(postUrl)
        .then (response => response.json())
        .then (data =>{
        console.log (data);
        const pageData = data; 
        
      })
      .catch(error => {
       
        console.error(error);
      });
    }

fetchPosts ();


