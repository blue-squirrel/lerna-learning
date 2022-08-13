'use strict';

module.exports = main;

var util = require('@xjh-lerna/util/lib');

function main() {
    console.log(util('666'));
    return "Hello from main";
}

main();