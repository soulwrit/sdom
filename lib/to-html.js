export default function toHTMLNode(html) {
    var div = document.createElement('div');
    div.innerHTML = html;

    return div.children;
}