////////////////////////////////////
// Helpers

function isString(input) {
    return typeof input === 'string'
}

function isNumber(input) {
    return typeof input === 'number'
}

function isNonEmpty(input) {
    return input.trim().length >= 3
}

function isEmptyString(input) {
    if (typeof input === 'string' && input.trim() === "") {
        return false;
    }
    return true;
}
// Helpers end
////////////////////////////////////


function isValidName(input) {
    if (isString(input) && isNonEmpty(input)) {
        return true;
    }
    return false;
}

function hoursAttended(attended, length) {
    if (isString(attended) || isNumber(attended)
        && isString(length) || isNumber(length)
        && attended >= 0
        && length >= 0) {
        if (isEmptyString(attended) && isEmptyString(length)) {
            attended = Number(attended)
            length = Number(length)
            //Check for NaNs
            if (attended === attended
                && length === length
                && Number.isInteger(attended)
                && Number.isInteger(length)
                && attended <= length) {
                return true;
            }
        }
    }
    return false;
}

function isValidName(name) {
    if (
        typeof name == "string" &&
        name.trim().length >= 3
    ) {
        return true;
    }

    return false;
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
