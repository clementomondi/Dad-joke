const btn = document.getElementById('btn');
const joke = document.getElementById('joke')

const apiKey = "6LYfJ+UsPiYIQW46Bc2JAw==G0hCgpDwk5blyjUo";

const options = {
    method: "get",
    headers: {
        "X-Api-key": apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {

    joke.innerText = 'updating.........';
    btn.Disabled = true;
    btn.innerText = 'Loading....'
    btn.Disabled = 'Tell me a joke';
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btn.innerText = 'Tell me a joke'
    btn.Disabled = false;
    joke.innerText = data[0].joke;
}

btn.addEventListener('click', getJoke);
