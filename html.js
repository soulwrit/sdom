import Util from '.';

// 获取当前元素的 html
Util.shared('html', function html(val) {
    if (this.isEmpty()) return val == null ? void 0 : this;

    if (val == null) {
        // 获取 html
        return this[0].innerHTML;
    }

    // 设置 html
    for (let i = 0; i < this.length; i++) {
        this[i].innerHTML = val;
    }

    return this;
});  