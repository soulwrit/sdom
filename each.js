import Util from '.';

// 元素遍历或者对象遍历
Util.shared('each', function each(array, callback) {
    if (array == null) return this;
    var hasCallback = typeof callback === 'function';

    switch (typeof array) {
        case 'object':
            if (!hasCallback) {
                return this;
            }

            if (Array.isArray(array)) {
                for (i = 0; i < array.length; i++) {
                    switch (callback.call(this, array[i], i, array)) {
                        case true: continue;
                        case false: return this;
                        default: break;
                    }
                }

                return this;
            }

            for (const key in array) {
                if (array.hasOwnProperty(key)) {
                    switch (callback.call(this, array[key], key, array)) {
                        case true: continue;
                        case false: return this;
                        default: break;
                    }
                }
            }
            break;

        case 'function':
            for (let i = 0; i < this.length; i++) {
                switch (array.call(this, this[i], i, this)) {
                    case true: continue;
                    case false: return this;
                    default: break;
                }
            }
            break;
        default:
            if (hasCallback) callback.call(this, array);
            break;
    }
    
    return this;
});