import Util, { _ } from '.';

// 当前元素的下一个元素
Util.shared('next', function next() {
    return _(this[0].nextElementSibling);
});  