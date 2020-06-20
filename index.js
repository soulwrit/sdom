import query from './lib/query';
import makeInstall from './lib/makeInstall';

/**
 * dom 操作工具类
 * @param {String} selector 
 * @param {HTMLElement} context 
 */
function Util(selector, context) {
    if (selector instanceof Util) {
        return selector;
    }

    if (!(this instanceof Util)) {
        throw new Util(selector, context);
    }

    this.define = makeInstall(this);
    this.shared = Util.shared;
    this.static = Util.static;
    this.selector = selector;

    if (selector == null) {
        this.length = 0;
        return this;
    }

    var refs = query(selector, context);
    this.length = refs.length;

    for (let i = 0; i < this.length; i++) {
        this[i] = refs[i];
    }

    return this;
}
Util.version = '1.0.0';
Util.author = '田路刚';
Util.email = 'tianlugang@yeah.net';
Util.static = makeInstall(Util);
Util.shared = makeInstall(Util.prototype);

Util.prototype.is = function is(obj) {
    return obj instanceof Util;
}
Util.prototype.isEmpty = function isEmpty() {
    return this.length === 0;
}
Util.prototype.forEach = function forEach(callback) {
    if (typeof callback !== 'function') return this;

    for (let i = 0, length = this.length; i < length; i++) {
        switch (callback.call(this, this[i], i)) {
            case true:
                continue;
            case false:
                return;
            default: break;
        }
    }
    return this;
}

export default Util;
export function _(selector, context) {
    return new Util(selector, context);
}