const mongoose = require('mongoose');

const MongoUri = "mongodb+srv://mishra_komal:Komal21@cluster0.tdsjt.mongodb.net/node-auth?retryWrites=true&w=majority";


const MongoInit = async ()=> {

    await mongoose.connect(MongoUri, {useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology:true});
    console.log("Connected to Mongo AtlasDB...");
}

module.exports = MongoInit;