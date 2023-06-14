const postUrl="https://fedup.learnbydoing.online/wp-json/wp/v2/posts"; 

const postsContainer = document.getElementById(".postsContainer");

async function getposts(){


  try {
    const response = await fetch (postUrl); 
    const posts = await response.json();

    console.log (posts);
  
    for(let i = 0; i < posts.length; i++) {

      postsContainer.innerHTML += `<div class="postsContainer">
                                      <h2>${post.name}</h2>
                                      
                                  </div>`
  }

  } catch (error){
    console.log (error); 
  }

}

getposts(postUrl);



/*


async function getposts() {
    try {
        const response = await fetch(postUrl);

        const posts = await response.json();

        console.log(posts);

        for(let i = 0; i < posts.length; i++) {

            postsContainer.innerHTML += `<div class="card">
                                            <h4>${post[i].name}</h4>
                                            <img src="${post[i].image}" alt="${results[i].name}" />
                                        </div>`
        }



    } catch (error) {
        console.log(error);
        postsContainer.innerHTML = message("error", error);
    }
}

getposts();
*/

// fetch(url)
//     .then(response => response.json())
//     .then(data => createHTML(data))
//     .catch(error => resultsContainer.innerHTML = displayError("An error occurred when calling the API"));

/*
function createHTML(results) {
    const facts = results.all;

    resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++) {

            if (i === 10) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
        }
}


async function getCats() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const facts = data.all;

        createHTML(facts);

    } catch (error) {
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

getCats();

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


/*
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
*/

