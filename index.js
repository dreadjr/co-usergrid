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
  'createGroup',
  'createEntity',
  'getEntity',
  'restoreEntity',
  'createCollection',
  'restoreCollection',
  'getFeedForUser',
  'createUserActivity',
  'createUserActivityWithEntity',
  'signup',
  'login',
  'reAuthenticateLite',
  'reAuthenticate',
  'loginFacebook',
  'getLoggedInUser'
]);

addThunkMethods(usergrid.entity, [
  'save',
  'fetch',
  'destroy',
  'connect',
  'getConnections',
  'getGroups',
  'getActivities',
  'getFollowing',
  'getFollowers',
  'getRoles',
  'getPermissions',
  'disconnect'
]);

addThunkMethods(usergrid.collection, [
  'addCollection',
  'fetch',
  'addEntity',
  'destroyEntity',
  'getEntityByUUID',
  'getNextPage',
  'getPreviousPage'
]);

addThunkMethods(usergrid.group, [
  'fetch',
  'members',
  'add',
  'remove',
  'feed',
  'createGroupActivity'
]);

module.exports = usergrid;