import Util, { _ } from '.';

// 将该元素插入到某个元素前面
Util.shared('before', function before(selector) {
    if (this.isEmpty()) return this;
    const $refNode = _(selector);
    const refNode = $refNode[0];
    if (!refNode) {
        return this;
    }

    return this.forEach(elem => {
        refNode.parentNode.insertBefore(elem, refNode);
    });
}); 