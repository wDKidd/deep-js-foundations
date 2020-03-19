//Creates a tiny polyfill for Object.is

if (!Object.is) {
    Object.is = function ObjectIs(x, y) {

        function isNegZero(x) {
            // -0 will always return -Infinity when divided by 1
            return x === 0 && 1 / x === -Infinity
        }
        function isNan(x) {
            // NaN is not equal to itself
            return x !== x
        }
        function imExact(x, y) {
            return x === y;
        }

        if (isNan(x) && isNan(y)) {
            return true
        } else if (isNegZero(x) || isNegZero(y)) {
            return isNegZero(x) && isNegZero(y)
        } else if (imExact(x, y)) {
            return true
        }
    }
}

// tests:
console.log(Object.is(42, 42) === true)
console.log(Object.is('foo', 'foo') === true)
console.log(Object.is(false, false) === true)
console.log(Object.is(null, null) === true)
console.log(Object.is(undefined, undefined) === true)
console.log(Object.is(NaN, NaN) === true)
console.log(Object.is(-0, -0) === true)
console.log(Object.is(0, 0) === true)
console.log(Object.is(-0, 0) === false)
console.log(Object.is(0, -0) === false)
console.log(Object.is(0, NaN) === false)
console.log(Object.is(NaN, 0) === false)
console.log(Object.is(42, '42') === false)
console.log(Object.is('42', 42) === false)
console.log(Object.is('foo', 'bar') === false)
console.log(Object.is(false, true) === false)
console.log(Object.is(null, undefined) === false)
console.log(Object.is(undefined, null) === false)