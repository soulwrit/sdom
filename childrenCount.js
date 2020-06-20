import Util, { _ } from '.';

// 当前元素的子元素的个数
Util.shared('childrenCount', function childrenCount() {
    return _(this.isEmpty() ? null : this[0].children).length;
});