'use strict';

module.exports = util;

var l = require('lodash');

function util(test = 'test') {
    return "lodash cloneDeep" + l.cloneDeep(test);
}
