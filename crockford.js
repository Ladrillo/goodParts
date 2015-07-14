var add = function (x, y) {
    return x + y;
};

var mul = function (x, y) {
    return x * y;
};

var idf = function (x) {
    return function () {
        return x;
    };
};

var addf = function (x) {
    return function (y) {
        return x + y;
    };
};

var applyf = function (func) {
    return function (x) {
        return function (y) {
            return func(x, y);
        };
    };
};

var curry = function (func, x) {
    return function (y) {
        return func(x, y);
    };
};

var inc1 = curry(add, 1);

var inc2 = applyf(add)(1);

var inc3 = addf(1);

var methodize = function (func) {
    return function (x) {
        return func(this, x);
    };
};

Number.prototype.add = methodize(add);
console.log((7).add(3));

var demethodize = function (method) {
    return function (x, y) {
        return method.call(x, y);
    };
};

console.log(demethodize(Number.prototype.add)(5, 6));