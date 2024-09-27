var App = function () {
    var crash = function () {
        var hidden, visibilityChange;
        if (typeof document.hidden !== 'undefined') {
            hidden = 'hidden';
            visibilityChange = 'visibilitychange';
        } else if (typeof document.msHidden !== 'undefined') {
            hidden = 'msHidden';
            visibilityChange = 'msvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') {
            hidden = 'webkitHidden';
            visibilityChange = 'webkitvisibilitychange';
        }

        if (typeof document.addEventListener !== 'undefined'
            && typeof document[hidden] !== 'undefined') {
            var originTitle = document.title;
            var timeoutID;
            document.addEventListener(visibilityChange, function () {
                if (document[hidden]) {
                    window.clearTimeout(timeoutID);
                    document.title = '>_< 喔唷，崩溃啦~';
                } else {
                    document.title = '^_^ 嘻嘻，又好啦~';
                    timeoutID = window.setTimeout(function () {
                        document.title = originTitle;
                    }, 2000);
                }
            });
        }
    };

    return {
        init: function () {
            crash();
        }
    };
}();

App.init();
