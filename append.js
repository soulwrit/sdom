import Util, { _ } from '.';

// 增加子节点
Util.shared('append', function append(children) {
    if (this.isEmpty() || children == null) return this;
    const refs = _(children);

    return this.forEach(elem => {
        refs.forEach(child => {
            elem.appendChild(child);
        });
    });
});

