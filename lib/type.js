'use strict';

var toStr = Object.prototype.toString;

function type(obj) {
    var str = toStr.call(obj);
    return str.substr(8, str.length - 9).toLowerCase();
}

function isInteger(obj) {
    return (obj | 0) === obj;   // jshint ignore: line
}

function isObject(obj) {
    return type(obj) === 'object';
}

function isRegExp(obj) {
    return type(obj) === 'regexp';
}

type.isInteger = isInteger;
type.isObject = isObject;
type.isRegExp = isRegExp;

module.exports = type;