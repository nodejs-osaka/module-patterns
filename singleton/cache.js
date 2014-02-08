var caches = {};

exports.set = function (key, value) {
    caches[key] = value;
};

exports.get = function (key) {
    return caches[key];
};