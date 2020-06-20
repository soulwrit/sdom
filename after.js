import Util, { _ } from '.';

// 将该元素插入到某个元素后面
Util.shared('after', function after(selector) {
    if (this.isEmpty()) return this;

    const $refNode = _(selector);
    const refNode = $refNode[0];
    if (!refNode) {
        return this;
    }

    return this.forEach(elem => {
        const parent = refNode.parentNode;
        // 最后一个元素
        if (parent.lastChild === refNode) {
            parent.appendChild(elem);
        } else {
            // 不是最后一个元素
            parent.insertBefore(elem, refNode.nextSibling);
        }
    })
}); 