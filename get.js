import Util, { _ } from '.';

// 根据下标获取元素
Util.shared('get', function get(index) {
    var length = this.length;
    if (index < 0) {
        index += length;
    }

    if (index >= length) {
        index = index % length;
    }

    return _(this[index]);
}); 