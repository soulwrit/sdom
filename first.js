import Util, { _ } from '.';

// 获取第一个元素
Util.shared('first', function first() {
    return _(this[0]);
}); 