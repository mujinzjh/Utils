const getMondayInAPeriod = require('./weekUtils.js');

function Utils() { }

Utils.prototype.getMondayInAPeriod = getMondayInAPeriod;

module.exports = new Utils();