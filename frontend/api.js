document.getElementById('getQuotes').addEventListener('click', getQuote);
document.getElementById('getMovies').addEventListener('click', getMovies);
document.getElementById('getSeries').addEventListener('click', getSeries);

function getQuote() {
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => {
            let output = `   
                    <p class="text-center">
                    <emphasize>&ldquo; ${quote.quote} &rdquo;</emphaize>
                    </p>
                    <p class="m-0" style="font-width:bold; font-size:1rem;">-by <i>${quote.character}</i>&nbsp;&nbsp;from&nbsp;&nbsp;<i>${quote.anime}</i></p>
            `;
            console.log('printing data', quote);
            document.getElementById('output').innerHTML = output;
        }).catch((err) => console.log(err))
}

function getMovies() {
    fetch('http://localhost:8000/movielist')
        .then(response => response.json())
        .then(data => {
            const listContainer = document.getElementById('output');
            listContainer.innerHTML = '';

            // loop through the data and create HTML elements for each item
            data.forEach(movie => {
                const item = document.createElement('li');
                item.textContent = `${movie.name} (${movie.genre}, ${movie.rating})`;
                listContainer.appendChild(item);
            })
        }).catch((err) => console.error(err));
}

function getSeries() {
    fetch('http://localhost:8000/animelist')
        .then(response => response.json())
        .then(data => {
            const listContainer = document.getElementById('output');
            listContainer.innerHTML = '';

            // loop through the data and create HTML elements for each item
            data.forEach(series => {
                const item = document.createElement('li');
                item.textContent = `${series.name} (${series.genre}, ${series.rating})`;
                listContainer.appendChild(item);
            })
        }).catch((err) => console.error(err));
}