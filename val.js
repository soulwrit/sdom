import Util from '.';

// 获取 value
Util.shared('value', function value(value) {
    if (this.length === 0) {
        return value == null ? void 0 : this;
    }
    if (value == null) {
        return this[0].value;
    }
    
    // 设置 value
    for (let i = 0; i < this.length; i++) {
        this[i].value = value;
    }
    
    return this;
});

