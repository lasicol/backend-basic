const MongoClient = require('mongodb').MongoClient;

class DbManager {
    constructor() {
        this.db = null;
        this.client = null;
        this.dbname = "";
    }

    async connect(url , dbname) {
        // console.log(url);
        this.client = await MongoClient.connect(url);
        this.db = this.client.db(dbname);
    }

    async insertDocuments() {
        const collection = this.db.collection('documents');
        let result = await collection.insertMany([{a : 1}, {a : 2}, {a : 3}]);
        console.log(result);
    }

    async findDocuments() {
        const collection = this.db.collection('documents');
        let docs = await collection.find({'a': 3}).toArray();

        console.log(docs);
      }

    async close() {
        this.client.close();
    }
}

module.exports = {
    init: async (url, dbname) => {
        const dbMgr = new DbManager();
        await dbMgr.connect(url, dbname);
        return dbMgr;
    }
};