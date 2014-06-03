var thunkify = require('thunkify');
var assert = require('assert');
var usergrid = require('usergrid');

function addThunkMethods(obj, methods){
  methods.forEach(function (method) {
    console.log("method", method);
    obj.prototype[method + "T"] = thunkify(obj.prototype[method]);
  });

  return obj;
}

addThunkMethods(usergrid.client, [
  'request',
  'getEntity'
]);

addThunkMethods(usergrid.entity, ['fetch']);
addThunkMethods(usergrid.collection, []);
addThunkMethods(usergrid.group, []);
addThunkMethods(usergrid.client, []);

module.exports = usergrid;