import Util from '.';

// 添加 class
 /**
  * ********************************************* Classlist操作
  * classlist存在兼容问题 IE、IE Mobile、Opera Mini不完全支持，不支持add、remove方法
  * 下面提供的是HTML5新的API包装方法，在以后不再考虑兼容上述浏览器时，可以直接打开使用
  * 同时也提供了相应的兼容处理方法
  **/
Util.shared('addClass', function addClass(className) {
    if (className == null || this.isEmpty()) {
        return this;
    }

    return this.forEach(function (elem) {
        var classList = elem.className;
        if (classList == null) {
            elem.className = className;
            return;
        }

        // 解析当前 className 转换为数组
        arr = classList.split(/\s+/);

        // 添加 class
        if (arr.indexOf(className) < 0) {
            arr.push(className);
            elem.className = arr.join(' ');// 修改 elem.class
        }
    });
}); 