import Util from '.';

// 事件管理模块
Util.shared({
    // 事件绑定
    on: function on(type, selector, handle, option, once) {
        // selector 不为空，证明绑定事件要加代理
        if (typeof selector === 'function') {
            option = handle;
            handle = selector;
            selector = null;
        }
        if (typeof handle !== 'function') {
            throw new TypeError('The event handle must be a function.');
        }

        // type 是否有多个
        const types = type.split(/\s+/);
        const stack = this.events || [];

        return this.forEach(element => {
            types.forEach(type => {
                if (!type) {
                    return;
                }

                // 避免事件重复绑定
                let pushed;
                mapArray(stack, event => {
                    pushed = event.element === element && event.type === type && event.handle === handle;
                    if (pushed) return false;
                });
                if (pushed) {
                    return;
                }

                const event = { element, handle, type, listen };
                function listen(e) {
                    // 有代理
                    if (!!selector) {
                        // 减少不必要的dom查询
                        if (!e.target.matches(selector)) {
                            return false;
                        }
                    }

                    handle.call(e.target, e);
                    if (once === true) {
                        const index = stack.indexOf(event);

                        stack.splice(index, 1);
                        element.removeEventListener(event.type, event.listen, option);
                    }
                }

                stack.push(event);
                element.addEventListener(type, listen, option);
            })
        });
    },
    // 绑定一次，执行之后，理解解除
    once: function once(type, selector, handle, option) {
        return this.on(type, selector, handle, option || false, true);
    },
    // 事件解除
    off: function off() {
        var arg = arguments;
        var len = arg.length;
        var stack = this.events || [];

        return this.forEach(element => {
            for (let i = 0, event; i < stack.length; i++) {
                event = stack[i];
                
                switch (len) {
                    case 0:// 一个参数都没提供, 直接清空list
                        if (event.element === element) {
                            element.removeEventListener(event.type, event.handle);
                            stack.splice(i, 1);
                            i--;
                        }
                        break;
                    case 1: // 有type，没handle ,这个type的handle全清空
                        if (event.element === element && event.type === arg[0]) {
                            element.removeEventListener(event.type, event.listen);
                            stack.splice(i, 1);
                            i--;
                        }
                        break;
                    default:// 有type，也有handle，也有evtlist
                        if (event.element === element && event.type === arg[0] && event.handle === arg[1]) {
                            element.removeEventListener(event.type, event.listen, arg[2]);
                            stack.splice(i, 1);
                            i--;
                        }
                        break;
                }
            }
        });
    },
    // 手动触发事件
    emit: function emit() {
        var arg = arguments;
        var len = arg.length;
        var stack = this.events || [];

        return this.forEach(element => {
            mapArray(stack, event => {
                switch (len) {
                    case 0:// 一个参数都没提供, 直接触发当前对象上所有监听器
                        if (event.element === element) {
                            triggerEvent(element, event.type, arg[0], arg[1], arg[2]);
                        }
                        break;
                    case 1: // 有type，触发指定类型的监听函数, 挨个触发事件，转发参数
                        if (event.element === element && event.type === arg[0]) {
                            triggerEvent(element, event.type, arg[0], arg[1], arg[2]);
                        }
                        break;
                    default: break;
                }
            });
        });
    }
});

function mapArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        switch (callback(array[i], i)) {
            case false: return;
            case true: continue;
            default: break;
        }
    }
}

function triggerEvent(element, type, data, bubbles, cancelable) {
    var event = document.createEvent('Event');
    event.data = data || {};
    event.target = element;
    event.type = type;
    event.emitted = true;
    event.initEvent(type, bubbles !== false, cancelable === true);
    element.dispatchEvent(event);
}