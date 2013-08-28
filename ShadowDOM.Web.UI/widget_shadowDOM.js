var widget = widget || {};
widget.WidgetShadow = (function () {
    function widget() {
        var elements = document.getElementsByClassName('lunchAndLearnWidgetShadow');
        for (var i = 0; i < elements.length; i++) {
            this.element = elements[i];
            var shadow = this.element.webkitCreateShadowRoot();
            shadow.applyAuthorStyles = false;
            var items = shadow.appendChild(document.createElement('ul'));
            this.loadItems(function (item) {
                var li = document.createElement('li');
                li.innerHTML = item.item;
                items.appendChild(li);
            });
            shadow.innerHTML += '<style>' +
            'ul {' +
            '    list-style:none; ' +
            '    text-align:center;' +
            '    border-top:1px solid #eee;' +
            '    border-bottom:1px solid #eee;' +
            '    padding:10px 0;' +
            '}' +
            'ul li {' +
            '    color:#000;' +
            '    display:inline;' +
            '    padding:0 10px;' +
            '    letter-spacing:10px;' +
            '}' +
            '</style>';
        }
    }
    widget.prototype.loadItems = function (callback) {
        for (var i = 0; i < 10; i++) {
            callback({ item: i });
        }
    };
    return widget;
})();

jQuery(document).ready(function ($) {
    var shadow = new widget.WidgetShadow();
});