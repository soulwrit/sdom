import Util, { _ } from '.';

/**
 * ********************************************* 子元素过滤
 * 
 * 我们一般可以采用DFS（深度优先遍历）和BFS（广度优先遍历）来遍历DOM树
 * DFS总是先进入下一级节点，只有当下一级没有未遍历的子节点时才会进入到当前层级的其它节点
 * BFS则总是先遍历当前层级的所有节点，只有当当前层级所有节点都遍历结束后才会进入下一层级。
 * 
 * https://segmentfault.com/a/1190000009112326
 * https://www.cnblogs.com/joyeecheung/p/4168521.html 
 * 
 * 以下Wathwg、DOM4、W3C表现一致
 * node.firstElementChild
 * node.lastElementChild
 * node.previousElementSibling
 * node.nextElementSibling
 * node.childElementCount 约等于 node.children.length
 * 以上方法 IE 9+ 兼容 
 * 当前元素集合中的指定下标的元素
 **/
Util.shared('eq', function eq(index) {
    return _(Math.abs(index) < this.length ? this[index >= 0 ? index : (~index)] : null);
});

