import Util from '.';

// 控制元素隐藏
Util.shared('hide', function hide() {
    var length = this.length;
    if (length === 0) return this;

    for (let i = 0; i < length; i++) {
        this[i].style.display = 'none';
    }

    return this;
}); 