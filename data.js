import Util, { _ } from '.';

/** 
 * 自定义属性data-*操作
 * IE 10-, IE Mobile 10-, Opera Mini All 部分支持
 * 部分支持是指能够使用data-*属性并使用getAttribute访问它们 
 **/
Util.shared('data', function data(name, value) {
    if (/^data-\w+$/.test(name)) {
        if (value) {
            this.attr(name, value);
        }
        return this.attr(name);
    }
    switch (typeof name) {
        case 'string':
        case 'boolean':
        case 'number':
            name = String(name).toLowerCase();
            if (value) {
                return this.attr('data-' + name, value);
            }
            return this.attr('data-' + name);
        case 'object':
            for (let key in name) {
                this.attr('data-' + key.toLowerCase(), name[key])
            }
            break;
        default: break;
    }
    
    return this;
});  