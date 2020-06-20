import util from '.';

util.shared('hasClass', function hasClass(className) {
    return this.isEmpty() ? false : this[0].className.match(new RegExp('(^|\\s)' + className + '(\\s|$)'))
});
