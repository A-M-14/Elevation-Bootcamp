const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const button = document.getElementById("new-joke");

function getJoke() {
  setupEl.textContent = "Loading...";
  punchlineEl.textContent = "";

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      setupEl.textContent = data.setup;
      punchlineEl.textContent = data.punchline;
    })
    .catch(error => {
      setupEl.textContent = "Failed to fetch joke.";
      punchlineEl.textContent = "";
      console.error("Fetch error:", error);
    });
}

getJoke();
button.addEventListener("click", getJoke);
