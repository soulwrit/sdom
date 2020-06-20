import Util from '.';

// 修改 css
Util.shared('css', function css(key, val) {
    if (this.isEmpty()) {
        return val == null ? void 0 : this;
    }

    // 获取值
    if (val == null) {
        return this[0].style[key];
    }

    // style 无值
    const currentStyle = `${key}:${val};`;
    
    return this.forEach(function (elem) {
        const style = elem.getAttribute('style'); // style.cssText 有兼容性问题

        if (style == null) {
            elem.setAttribute('style', currentStyle);
            return;
        }

        // 将 style 按照 ; 拆分为数组
        const cssText = style.split(';').filter(item => {
            // 对每项样式，按照 : 拆分为 key 和 value
            let arr = item.split(':').map(i => i.trim());

            // 替换或者新增
            if (arr.length === 2) {
                return arr[0] === key ? currentStyle : arr.join(':');
            }
            // 移除不符合规则的 css 属性
        });

        // 结果
        elem.setAttribute('style', cssText.join(';'));
    });
});