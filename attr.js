import Util, { _ } from '.';

// 获取/设置 属性
Util.shared('attr', function attr(key, val) {
    if (this.length === 0) {
        return val == null ? void 0 : this;
    }

    // 获取值
    if (val == null) {
        return this[0].getAttribute(key);
    }

    // 设置值
    let isObj = typeof key === 'object';
    for (let i = 0, elem; i < this.length; i++) {
        elem = this[elem];
        isObj ? setAttribute(this, key) : elem.setAttribute(key, val);
    }

    return this;
});

function setAttribute(elem, object) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            elem.setAttribute(key, object[key]);
        }
    }
}
/**
    * ********************************************* HTML Attr 操作
    * data-* HTML5自定义属性单独实现，避免使用原生的dataset
    * 注意: HTML元素属性仅仅支持a-z、A-Z、0-9、_这些字符
    **/
// 增加、删除、更改属性值
function attr(name, value) {
    switch (typeof name) {
        // 1> 当参数name为string类型时
        case 'string':
            // 1.1> 当参数value不存在时，视为获取属性
            if (!value) {
                return this.natived.getAttribute(name.toLowerCase())
            };
            // 1.2> 与1.1相反 
            this.natived.setAttribute(name.toLowerCase(), value);
            break;
        // 2> 当参数name为对象时，视为批量设置属性，忽略第二个参数
        case 'object':
            for (let key in name) {
                // 2.1> 遍历name对象，key值为字符串时，视为设置属性
                if ('string' === typeof key) {
                    const keyValue = name[key];
                    const newKey = key.toLowerCase();
                    if (keyValue) {
                        const original = this.natived.getAttribute(newKey);

                        if (original && original !== '') {
                            // 该属性存在时值时，当不包含当前值时，将新值keyValue加到已有值的后面
                            if (keyValue && !original.match(new RegExp('(^|\\s)' + keyValue + '(\\s|$)'))) {
                                this.natived.setAttribute(newKey, original + ' ' + keyValue);
                            }
                        } else {
                            this.natived.setAttribute(newKey, keyValue);
                        }
                    }
                }
            }
            break;
        default: break;
    }
}