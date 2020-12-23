var app = require('./src/handlers/index.js');

var req = {headers:{}};

req.httpMethod = "GET";

req.query = {
    "name" : "Amrit",
    "msg" : "hello"
}

//req.httpMethod = "POST";
// req.body = {
//     "name" : "amrit",
//     "msg" : "hello"
// }

const util = require('util');

function getContextObject() {
   return {
       log: function() {
           console.log(util.format(arguments));
       },
       error: function() {
           console.log(util.format(arguments));
       },
       res: function() {
        console.log(arguments);
       },
       done: function(){
           console.log('done');
           process.exit(0);
       }
   }
}

var context = getContextObject();
app.handler(context,req);