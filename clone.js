import Util, { _ } from '.';

// 元素复制
Util.shared('clone', function clone(deep) {
    const cloneList = []

    for (let i = 0; i < this.length; i++) {
        cloneList.push(this[i].cloneNode(!!deep));
    }

    return _(cloneList);
}); 