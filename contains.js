import Util from '.';

// 是否包含某个子节点
Util.shared('contains', function contains(elem) {
    if (this.isEmpty() || elem == null) return false;

    return this[0].contains(elem);
});