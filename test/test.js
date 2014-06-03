var usergrid = require('../index.js');
var co = require('co');
//var thunkify = require('thunkify');

var opts = {
  URI: 'http://localhost:8080',
  orgName: 'test-organization',
  appName: 'test-app',
  authType: usergrid.AUTH_CLIENT_ID,
  clientId: 'b3U6Qmu2yugrEeOTSqvR6ppFjg',
  clientSecret: 'b3U6giKCfRFcVPKNlJBS88dxq1qGNDY',
  logging: true,
  buildCurl: true
};

co(function *() {
  try {
    console.log("building client", usergrid.client);
    var client = new usergrid.client(opts);
    console.log("getting dog", client);

    var dog1 = client.getEntityT({type:"dogs", uuid: 'db712530-e82b-11e3-b702-0501b27ebc26'});
    var response = yield [dog1, dog1, dog1, dog1];
    console.log("got dog", response);

  } catch(e) {
    console.log("co error in code", e);
  }
})();


//var co_usergrid = require('../index.js');
//var co = require('co');
//
//var ug = require('usergrid');
//
//var fs = require('co-fs');
////var thunkify = require('thunkify');
////var thunkify_wrap = require('thunkify-wrap');
//
//var opts = {
//    URI: 'http://localhost:8080',
//    orgName: 'test-organization',
//    appName: 'test-app',
//    authType: ug.AUTH_CLIENT_ID,
//    clientId: 'b3U6Qmu2yugrEeOTSqvR6ppFjg',
//    clientSecret: 'b3U6giKCfRFcVPKNlJBS88dxq1qGNDY',
//    logging: true,
//    buildCurl: true
//  };
//
//function *getDog() {
//  //var client = new co_usergrid(opts).client;
//  console.log("ccci", co_usergrid)
//  var client = new co_usergrid.client(opts);
//  console.log("client", client);
//  var dog = yield client.getEntityT({ type: 'dogs', uuid: 'db712530-e82b-11e3-b702-0501b27ebc26'});
//  return dog;
//}
//
//co(function *() {
//  try {
//    console.log("getting dog");
//    var dog = yield getDog();
//    console.log("got dog", dog);
//    //yield dog.saveT()
//  } catch(e) {
//    console.log("co error in code", e);
//  }
//  console.log("building client");
//  var client = new co_usergrid(opts).client;
//  console.log("getting dog", client);
//  console.log(client.getEntity.toString());
//  try {
//    var dog = yield client.getEntityT({ type: 'dogs', uuid: 'db712530-e82b-11e3-b702-0501b27ebc26'});
//    return dog;
//    console.log("got dog", dog);
//  } catch (e) {
//    console.log("got erorr", e);
//  }
//})();

//
//var cc = new ug.client(opts);
//console.log(ug);
///*
//console.log(ug.client);
//console.log(cc.getEntity);
//console.log(typeof ug.client.getEntity);
//ug.client.getEntity = thunkify(ug.client.getEntity);
//ug.entity.fetch = thunkify(ug.entity.fetch);
//*/
//var getClient = function(opts) {
//  var client = new ug.client(opts);
//
//  cc.getEntity = thunkify_wrap(cc.getEntity, client);
//  ug.entity.fetch = thunkify_wrap(ug.entity.fetch);
//  return client;
//}
//
//co(function *() {
//  var gc = getClient(opts);
//  console.log("getting dog");
//  var dog = gc.getEntity({ type:'dogs', uuid:'db712530-e82b-11e3-b702-0501b27ebc26'});
//  console.log("got dog", dog);
//})();

//var user = cc.getEntity({ type:'dogs', uuid:'a55b28fa-e77d-11e3-bd96-d5ef3026f05d'}, function(err, data) {
//  console.log("no co", err, data, user);
//});

/*
co(function *() {
  var json = yield fs.readFile('package.json', 'utf8');
  console.log("read file", json);

  console.log("usergrid", usergrid);
  //var client = new usergrid.client({
  var client = new usergrid({
    URI: 'http://localhost:8080',
    orgName: 'test-organization',
    appName: 'test-app',
    authType: ug.AUTH_CLIENT_ID,
    clientId: 'YXA6YrMqQOdsEeO1oOF-d28D4A',
    clientSecret: 'YXA6eb7qTwrguAw47gGgGJ30iwdDyRQ',
    logging: true,
    buildCurl: true 
  }).client;
  //});

console.log("CLIENT", client);
  //var x = thunkify(client.createCollection);
  //var xxdogs = yield x({ type: 'dogs' });
  //console.log("xxdogs", xxdogs);

  var options = {
    type:'dogs',
    name:'Dino'
  }

  //try {
    console.log("getting dog");
    //client.getEntity({ type:'dogs', uuid:'a55b28fa-e77d-11e3-bd96-d5ef3026f05d'})(function(err, data) {
    //  console.log("XXXX", err, data);
    //});
    console.log("getEntity", client.getEntity);
    var user = yield client.getEntity({ type:'dogs', uuid:'a55b28fa-e77d-11e3-bd96-d5ef3026f05d'});
    console.log("dog", user);
    console.log("getting dogs");
    var dogs = yield client.createCollection({ type: 'dogs' });
    console.log("where my dogs at", dogs);
    console.log("creating");
    var dog = yield client.createEntity(options);
    console.log("got my dog");
    dog.set('breed', 'Dinosaur');

    var data = {
      master: 'Fred',
      state: 'hungry'
    }

    //set is additive, so previously set properties are not overwritten
    dog.set(data);

    //finally, call save on the object to save it back to the database
    var response = yield dog.save();
    console.log("saved", response);
  //} catch(e) {
  //  console.log("HOLD ON FOLKS", e);
  //}
})();
*/
