import Util, { _ } from '.';

// 获取元素的子节点（包括文本节点）
Util.shared('childNodes', function childNodes() {
    return _(this.isEmpty() ? null : this[0].childNodes);
}); 