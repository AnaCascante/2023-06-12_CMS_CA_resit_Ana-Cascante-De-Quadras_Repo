const postUrl="https://fedup.learnbydoing.online/wp-json/wp/v2/posts"; 

const postsContainer = document.getElementById("posts");


  fetch(postUrl)
      .then ((response) => response.json())
      .then ((posts) => {
        const postItems = posts.map((post) => {

          return` 
          <div>
            <h2 class="postName">${post.title.rendered}</h2>
            <p class="postContent">${post.content.rendered}</p>
          </div>
          `
        }
        ); 
          postsContainer.innerHTML = postItems.join("");
      }
      )
    .catch((error) => {
     
      console.error(error);
    });
  



