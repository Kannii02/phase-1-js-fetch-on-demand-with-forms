const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID");
  
      console.log("User Input ID:", input.value); 
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => {
          console.log("Fetch Response Status:", response.status); 
          if (!response.ok) {
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then(data => {
          console.log("Fetched Movie Data:", data); 
  
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch(error => {
          console.error("Error fetching movie:", error);
          document.querySelector("section#movieDetails h4").innerText = "Movie Not Found";
          document.querySelector("section#movieDetails p").innerText = "";
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  