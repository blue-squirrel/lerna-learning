(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.index = factory());
})(this, (function () { 'use strict';

    var lib = comA;

    function comA() {
        return "Hello from comA";
    }

    return lib;

}));