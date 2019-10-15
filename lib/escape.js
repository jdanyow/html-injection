const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

export function escape(text) {
    return text.replace(/[&<>"']/g, c => map[c]);
}
