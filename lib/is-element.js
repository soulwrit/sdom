'use strict';
// 是否为DOM元素
export default function isElement(obj) {
    isElement = typeof HTMLElement === 'object'
        ? function isElement(obj) {
            return obj instanceof HTMLElement;
        }
        : function isElement(obj) {
            return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
        };

    isElement(obj);
}
