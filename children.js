import Util, { _ } from '.';

// 获取元素的子元素
// 当前元素集合中的元素的所有子元素
// IE8- 的 children 会包含 comment node。
Util.shared('children', function children() {
    return _(this.isEmpty() ? null : this[0].children);
}); 