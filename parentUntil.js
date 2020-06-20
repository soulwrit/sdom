import Util, { _ } from '.';

// 找到符合 selector 的父节点
Util.shared('parentUntil', function parentUntil(selector) {
    var empty = _(null);
    var elem = this[0];
    if (selector == null || this.isEmpty() || elem == null || elem.nodeName === 'BODY') return empty;

    while (elem && elem.nodeName !== 'BODY') {
        elem = elem.parentElement;
        if (selector === elem) return _(elem);
        if (typeof selector === 'string') {
            if (matchTagName(selector, elem.nodeName)) return _(elem);
            if (matchId(selector, elem)) return _(elem);
            if (matchClassName(selector, elem.className)) return _(elem);
            if (matchProps(selector, elem)) return _(elem);
        }
    }

    return empty;
});

function matchId(selector, elem) {
    var id = elem.getAttribute('id');
    if (id && selector.indexOf('#' + id) > -1) return true;
}
function matchTagName(selector, nodeName) {
    return selector.toUpperCase() === nodeName;
}
function matchClassName(selector, className) {
    if (className == null) return false;
    let reg = new RegExp(selector, 'gi');
    return className.split(/\s+/).some(function (value) {
        return reg.test(value);
    });
}
function matchProps(selector, elem) {
    var reg = /\[(.+?)\]/g;
    var rep;

    while ((rep = reg.exec(selector))) {
        var [prop, value] = rep[1].trim().split('=');

        if (!prop) {
            continue;
        }
        var attrVal = elem.getAttribute(prop);

        if (attrVal) {
            if (!value || value === attrVal) return true;
        }
    }

    return false;
}
