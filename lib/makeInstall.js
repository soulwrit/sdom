const hasOwnProperty = Object.prototype.hasOwnProperty;

export default function makeInstall(shared) {
    return function install(key, value, force) {
        if (arguments.length === 0 || key == null) return;
        switch (typeof key) {
            case 'object':
                for (const k in key) {
                    if (hasOwnProperty.call(key, k)) {
                        if (hasOwnProperty.call(shared, k) && !value) {
                            continue;
                        }
                        shared[k] = key[k];
                    }
                }
                break;
            default:
                if (hasOwnProperty.call(shared, key) && !force) {
                    return;
                }
                shared[key] = value;
                break;
        }
    }
}