import Util, { _ } from '.';

// 当前元素的下一个元素
Util.shared('prev', function prev() {
    return _(this[0].previousElementSibling);
});  