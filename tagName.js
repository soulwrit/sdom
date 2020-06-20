import Util from '.';

// 获取元素的标签名
Util.shared('tagName', function tagName() {
    return this.length === 0 ? void 0 : this[0].nodeName.toLowerCase();
}); 