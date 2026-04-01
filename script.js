const GENRES = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  sciencefiction: 878,
  tvmovie: 10770,
  thriller: 53,
  war: 10752,
  western: 37
};
const LANGUAGES = {
  en: "English",
  hi: "Hindi",
  mr: "Marathi",
  ta: "Tamil",
  te: "Telugu",
  kn: "Kannada",
  ml: "Malayalam",
  bn: "Bengali",
  pa: "Punjabi",
  gu: "Gujarati",
  ur: "Urdu",

  es: "Spanish",
  fr: "French",
  de: "German",
  it: "Italian",
  pt: "Portuguese",
  ru: "Russian",
  zh: "Chinese",
  ja: "Japanese",
  ko: "Korean",
  ar: "Arabic",
  tr: "Turkish",
  th: "Thai",
  id: "Indonesian",
  vi: "Vietnamese",
  nl: "Dutch",
  pl: "Polish",
  sv: "Swedish",
  no: "Norwegian",
  da: "Danish",
  fi: "Finnish",
  el: "Greek",
  he: "Hebrew",
  cs: "Czech",
  hu: "Hungarian",
  ro: "Romanian",
  uk: "Ukrainian"
};
let Alt="data:image/png;base64,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"

// FILTER DATA

var currentPage = 1;
var lastlang=""


async function getdata(lang, genre) {
  try {
    genre = genre?.toLowerCase();

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=6654a81f73458e9c15388a19a4456fa1&page=${currentPage}`;

    if (GENRES[genre]) {
      url +=`&with_genres=${GENRES[genre]}`;
    }

    if (lang) {
      url +=`&with_original_language=${lang}`;
    }

    let res =await fetch(url);
    let movies =await res.json();

    rendermovies(movies.results); 
  } catch (x) {
    console.log(x.message);
  }
}



// FILTER HANDLER


function handlefilter() {
  let genre = document.getElementById("genre").value;
  let lang = document.getElementById("lang").value;

  lastGenre = genre;
  lastLang = lang;

  currentPage = 1;

  if (lastQuery) {
    searchmovie(lastQuery, lang, genre);
  } else {
    getdata(lang, genre);
  }
}

// -----------------------------------------SEARCHING MOVIE


async function searchmovie(query, lang, genre) {
  try {
    let res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6654a81f73458e9c15388a19a4456fa1&query=${encodeURIComponent(query)}&page=${currentPage}`
    );

    let data = await res.json();
    let movies = data.results;

    if (lang) {
      movies = movies.filter(m=>m.original_language==lang);
    }

    if (genre && GENRES[genre]) {
      movies = movies.filter(m =>m.genre_ids.includes(GENRES[genre]));
    }

    rendermovies(movies);

  } catch (err) {
    console.log(err.message);
  }
}



// ------------------------------------------SEARCHING



let lastQuery = "";
function handleSearchInput() {
  let query = document.getElementById("search").value;
  let lang = document.getElementById("lang").value;
  let genre = document.getElementById("genre").value;

  lastQuery = query;
  lastLang = lang;
  lastGenre = genre;

  currentPage = 1;

  searchmovie(query, lang, genre);
}


//  ---------------------------------------RENDERING MOVIES




function rendermovies(movies) {
  let container = document.getElementById("movies");
  container.innerHTML = "";

  if (!movies || movies.length === 0) {
    container.innerHTML = "<p>No movies found</p>";
    return;
  }

  movies.forEach(movie => {
   let div = document.createElement("div");
div.className = "movie-card1";
let imageSrc = "";

if (!movie.poster_path) {
  imageSrc = "data:image/png;base64,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";
} else {
  imageSrc = "https://image.tmdb.org/t/p/w200" + movie.poster_path;
}

div.innerHTML = `
  <div  style="display: flex; flex-direction: column; align-items: center;">
    <h3 style="color:white">${movie.title}</h3>
    <img src="${imageSrc}"  />
    <p>🗓️ ${movie.release_date.slice(0,4)}</p>
    <p>🌐 ${ LANGUAGES[movie.original_language]}</p>
    <p>⭐ RATING(<span style="color:yellow">${movie.vote_average || "N/A"}</span>)</p>
    <button class="add-btn">
    Add to Watchlist
  </button>
  </div>
`;
let button = div.querySelector(".add-btn");

    button.addEventListener("click", (e) => {
      addToWatchlist(movie,e.target);
    });



    container.appendChild(div);
  });
}
let container = document.getElementById("watchlist");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(4, 1fr)";
container.style.gap = "10px";




// ------------------------------------------------ watchlist




let watchlist =[];
let watchlistids =[];

function addToWatchlist(movie,button) {

  if (watchlistids.includes(movie.id)) {
    alert("Movie already in watchlist!");
    return;
  }

  watchlist.push(movie);
  watchlistids.push(movie.id);

  button.innerText = `✅ Added`;
  button.disabled = true;
  button.classList.remove("add-btn");
  button.classList.add("added");

  movie.btn = button; //store reference 

  let container = document.getElementById("watchlist");

  let div = document.createElement("div");

  let imageSrc = movie.poster_path
    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
    : Alt;

  div.innerHTML = `
    <div style="border:2px solid white; text-align:center ; padding:10px">
      <img src="${imageSrc}" />
      <h3>${movie.title}</h3>
      <button class="remove">Remove</button>
    </div>
  `;
  let Remove=div.querySelector(".remove")
  Remove.addEventListener("click", () => {
      remove(movie,div);
    });

  container.appendChild(div);
}

//remove from watchlist


function remove(movie, div) {
  watchlist = watchlist.filter(m => m.id !== movie.id);
  watchlistids = watchlistids.filter(id => id !== movie.id);
  if (movie.btn) {
    movie.btn.innerText = "Add to Watchlist";
    movie.btn.disabled = false;
  movie.btn.classList.remove("added");
  movie.btn.classList.add("add-btn")
  }

  div.remove(); //remove div from main dom
}


// ____________________________pagination

function nextPage() {
  currentPage++;
  document.getElementById("pageNumber").innerText = `Page ${currentPage}`;

  if (lastQuery) {
    searchmovie(lastQuery, lastLang, lastGenre);
  } else {
    getdata(lastLang, lastGenre);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    document.getElementById("pageNumber").innerText = `Page ${currentPage}`;

    if (lastQuery) {
      searchmovie(lastQuery, lastLang, lastGenre);
    } else {
      getdata(lastLang, lastGenre);
    }
  }
}



// initial call

getdata("", "");