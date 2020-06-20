import Util from '.';

// 获取元素矩形信息
Util.shared('rect', function rect() {
    return this.length === 0 ? void 0 : this[0].getBoundingClientRect();
}); 