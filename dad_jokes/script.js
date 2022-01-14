const jokeEl = document.getElementById('joke') //Gets the id joke in html file
const jokeBtn = document.getElementById('jokeBtn') //Gets the jokeBtn id in html file

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}