import { html, render } from './lib/lit-html/index.js';

const params = new URLSearchParams(location.search);
const searchTerm = params.get('term');

const resultCount = 512708;

const templateResult = html`
    <h1>
        <strong>${resultCount.toLocaleString()}</strong> results for 
        <em>${searchTerm}</em>
    </h1>`;

render(templateResult, main);
