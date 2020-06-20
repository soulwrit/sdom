import Util from '.';

// 控制元素显示
Util.shared('show', function show(display) {
    var length = this.length;
    if (length === 0) return this;

    for (let i = 0; i < length; i++) {
        this[i].style.display = display || 'unset';
    }

    return this;
}); 