const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke()
jokeBtn.addEventListener('click',generateJoke)

// const generateJoke = () => {
//     const config = { headers: {
//         'Accept': 'application/json'
//     }}
// fetch('https://icanhazdadjoke.com/', config)
// .then(response => response.json())
// .then(data => {
//     jokeEl.innerHTML = data.joke
// })
// };

//exact same functionality, but using async await instead of .then
async function generateJoke () {
    const config = { headers: {
        'Accept': 'application/json'
    }}
const response = await fetch('https://icanhazdadjoke.com/', config)

const data = await response.json()

jokeEl.innerHTML = data.joke

};
