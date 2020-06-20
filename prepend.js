import Util, { _ } from '.';

// 增加子节点
Util.shared('prepend', function prepend(children) {
    if (children == null || this.isEmpty()) return this;
    const refs = _(children);

    return this.forEach(elem => {
        refs.forEach(child => {
            elem.firstChild ? elem.insertBefore(child, elem.firstChild) : elem.appendChild(child);
        });
    });
});