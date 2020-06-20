import Util from '.';

// 判断两个 节点 是否相同
Util.shared('same', function same(elem) {
    if (this.length === 0 || elem == null) return false;

    if (this.is(elem)) {
        return this[0] === elem[0];
    }

    return this[0] === elem;
});