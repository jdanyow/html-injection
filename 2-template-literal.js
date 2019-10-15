const params = new URLSearchParams(location.search);
const searchTerm = params.get('term');

const resultCount = 512708;

main.innerHTML = `
    <h1>
        <strong>${resultCount.toLocaleString()}</strong> results for 
        <em>${searchTerm}</em>
    </h1>`;
