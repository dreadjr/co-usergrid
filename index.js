var thunkify = require('thunkify');
var assert = require('assert');
var usergrid = require('usergrid');


function thunkifyFixErrors(fn, fixError){
  assert('function' == typeof fn, 'function required');

  return function(){
    var args = new Array(arguments.length);
    var ctx = this;

    for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function(done){
      var called;

      args.push(function(){
        if (called) return;
        called = true;

        var fixedArgs = fixError(arguments);
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};

function fixErrors(args) {
  if (args['0'] == true && (args['1']||{}).error) {
    var error = new Error(args['1'].error_description);
    error.error = args['1'];
    args['0'] = error;

    return args;
  } else {
    return args;
  }
};

function addThunkMethods(obj, methods){
  methods.forEach(function (method) {
    console.log("method", method);
    //obj.prototype[method + "T"] = thunkify(obj.prototype[method]);
    obj.prototype[method + "T"] = thunkifyFixErrors(obj.prototype[method], fixErrors);
  });

  return obj;
};

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