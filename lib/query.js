import isNodeList from './is-node-list';
import isElement from './is-element';
import toHtml from './to-html';

export default function query(selector, context) {
    if (Array.isArray(selector)) return selector;
    if (isElement(selector)) return [selector];
    if (isNodeList(selector)) return selector;

    // 根据 selector 得出的结果（如 DOM，DOM List）
    if (typeof selector === 'string') {
        selector = selector.replace('/\n/mg', '').trim(); // 字符串
        if (selector.indexOf('<') === 0) {
            return toHtml(selector); // 如 <div>
        }
        context = context !== null && isElement(context) ? context : document;

        return context.querySelectorAll(selector);
    }

    return [];
}