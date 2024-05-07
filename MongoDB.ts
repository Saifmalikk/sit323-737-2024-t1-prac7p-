const { MongoClient } = require('mongodb');

const uri = 'mongodb://root:password@mongo-service:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
        console.error('Failed to connect to MongoDB', err);
        return;
    }
    console.log('Connected to MongoDB');
    const collection = client.db("test").collection("devices");
    client.close();
});
