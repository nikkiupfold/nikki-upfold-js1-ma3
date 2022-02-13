const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=200625380b134a1ba83ed6f88570b692";

const descriptionsContainer = document.querySelector(".descriptions");

async function getGames() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        const descriptions = results.results;

        descriptionsContainer.innerHTML = "";

        for (let i = 0; i < descriptions.length; i++) {

            if (i === 8) {
                break;
            }

            let name = descriptions[i].name;
            let rating = descriptions[i].rating;
            let amountOfTags = descriptions[i].tags.length;
            let convertedAmountOfTags = amountOfTags.toString();

            descriptionsContainer.innerHTML += `<div class="description"><p>Name: ${name}</p> <p>Rating: ${rating}</p> <p> Amount of tags: ${convertedAmountOfTags}</p></div>`;
        }
    } catch (error) {
        descriptionsContainer.innerHTML = errorMessage("error", "There was an error when fetching API.");
    }
}

getGames();