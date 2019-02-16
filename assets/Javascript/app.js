$(document).ready(function () {
    $('.ui.accordion').accordion();
    function once(fn, context) {
        var result;
        return function () {
            if (fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
            return result;
        };
    }
    $('.call').hover(once(function () {
        $(this).append("<p>469-247-5313</p>")
    }))
    $('.email').hover(once(function () {
        $(this).append("<p>gersoncruz91@gmail.com</p>")
    }))
    $('.page').hover(function() {
        
    })
});