import Util from '.';

// 元素聚焦
Util.shared('focus', function focus() {
    if (this.length === 0) {
        return this;
    }

    this[0].focus();

    return this;
}); 