import Util from '.';

// 清空元素自身的内容
Util.shared('empty', function empty() {
    return this.forEach(elem => {
        elem.innerHTML = '';
    });
}); 