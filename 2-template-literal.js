import { escape } from './lib/escape';

const params = new URLSearchParams(location.search);
const searchTerm = params.get('term');

const resultCount = 512708;

header.innerHTML = `
    <h1>
        <strong>${resultCount.toLocaleString()}</strong> results for 
        <em>${searchTerm}</em>
    </h1>`;

// Template literals are string literals allowing embedded expressions.
// easy to visualize
// easy to forget to escape
// no editor support