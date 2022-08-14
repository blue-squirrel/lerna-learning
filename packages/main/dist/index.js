(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.index = factory());
})(this, (function () { 'use strict';

    module.exports = main;

    var util = require('xjh-test-lerna-util');
    var comA = require('xjh-test-lerna-com-a');

    function main() {
        console.log(util('666'));
        return "Hello from main";
    }

    main();

    var index = {
        util,
        comA
    };

    return index;

}));
