import { escape } from './lib/escape';

const params = new URLSearchParams(location.search);
const searchTerm = params.get('term');

const resultCount = 512708;

header.innerHTML =
	'<h1>' +
	'<strong>' + resultCount.toLocaleString() + '</strong> results for "' +
	'<em>' + searchTerm + '</em>"' +
	'</h1>';

// error prone, unsafe, no editor support, multi-line strings??