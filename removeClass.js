import Util from '.';

// 删除 class
Util.shared('removeClass', function removeClass(className) {
    if (className == null || this.isEmpty()) {
        return this;
    }

    return this.forEach(function (elem) {
        var classList = elem.className;

        if (classList == null) {
            return;
        }

        // 解析当前 className 转换为数组
        // 删除 class  
        // 修改 elem.class
        elem.className = classList.split(/\s+/).filter(item => item !== className).join(' ');
    });
}); 