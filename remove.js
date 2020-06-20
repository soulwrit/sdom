import Util from '.';

// 移除当前节点
Util.shared('remove', function remove() {
    var length = this.length;

    for (let i = 0, elem; i < length; i++) {
        elem = this[i];
        elem.remove ? elem.remove() : elem.parentElement.removeChild(elem);
        this.splice(i, 1);
        i--;
    }

    return this;
}); 