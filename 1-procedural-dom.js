const params = new URLSearchParams(location.search);
const searchTerm = params.get('term');

const resultCount = 512708;

const h1 = document.createElement('h1');

const count = document.createElement('strong');
count.textContent = resultCount.toLocaleString();
h1.appendChild(count);

h1.insertAdjacentText('beforeend', ' results for "');

const term = document.createElement('em');
term.textContent = searchTerm;
h1.appendChild(term);

h1.insertAdjacentText('beforeend', '"');

header.appendChild(h1);

// safe, editor support, verbose, hard to visualize