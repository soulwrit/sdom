import Util from '.';

// 删除 属性
Util.shared('removeAttr', function removeAttr(name) {
    if (className == null) {
        return this;
    }

    return this.forEach(function (elem) {
        elem.removeAttribute(name);
    });
}); 