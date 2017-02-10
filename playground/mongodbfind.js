const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('UNable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    // db.collection('Todos').find({
    //     _id:new ObjectID('589d6f9adc06fe370cbd6765')
    // }).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch data',err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos Counts : ${count}`);
    },(err)=>{
        console.log('unable to fetch data',err);
    });

    db.close();
});