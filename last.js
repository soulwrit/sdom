import Util, { _ } from '.';

// 找出集合中的最后一个元素
Util.shared('last', function last() {
    return _(this[this.length - 1]);
}); 