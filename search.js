import Util, { _ } from '.';

// 查找子元素
Util.shared('search', function search(selector) {
    return this.length === 0 ? _([], null) : _(selector, this[0]);
});
