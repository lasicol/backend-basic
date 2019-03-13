
const dbManager = require("./db/dbManager")
var https 		= require('https');
var fs			= require('fs');

var api = require('./api/apiManager');

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';

global.dbMgr = null;
(async () => { 
    dbMgr = await dbManager.init(url, dbName)
  
    await dbMgr.insertDocuments();
    await dbMgr.findDocuments();
    await dbMgr.close();
})();

