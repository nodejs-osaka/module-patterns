var calc = {
    add: function (a, b) {
        return a + b;
    },

    sub: function (a, b) {
        return a - b;
    }
};

Object.defineProperty(Object.prototype, 'calc', {
    get: function() {
        return calc;
    }
});
