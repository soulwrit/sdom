'use strict';
// 是否是 DOM List
export default function isNodeList(element) {
    return element != null && (element instanceof HTMLCollection || element instanceof NodeList);
}