import Util from '.';

// 获取当前元素的 text
Util.shared('text', function text(val) {
    if (this.length === 0) return val == null ? void 0 : this;

    if (val == null) {
        // 获取 text
        return this[0].innerHTML.replace(/<.*?>/g, '');
    }

    // 设置 text
    for (let i = 0; i < this.length; i++) {
        this[i].innerHTML = val;
    }
    
    return this;
}); 