import Util, { _ } from '.';

// 找到父元素节点
/**
 * ********************************************* 同层级元素过滤
 * 当前元素集合中的元素的所有父元素
 * IE8- 中 parentNode 有 bug  
 **/
// 在只需要 Element 的场景下，选择 parentElement
Util.shared('parent', function parent() {
    return this.length === 0 ? _(null) : _(this[0].parentElement);
});
